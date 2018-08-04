function getIssues() {
  console.log('getting issues...')
  fetch("https://api.github.com/repos/Gingertonic/javascript-fetch-lab/issues", {
    headers: { Authorization: `token ${getToken()}` },
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  console.log('showing issues...')
  console.log(json)
  $(`#issues`).html(`${json.map(iss => renderIssue(iss)).join("")}`)
}

function renderIssue(iss) {
  return `<div>
            <p><strong>${iss.title}</strong> - ${iss.user.login}<br>
            ${iss.body}<br>
            Status: <em>${iss.state}</em></p>
          </div>`
}

function createIssue() {
  issTitle = document.getElementById('title').value
  issBody = document.getElementById('body').value
  const issueContent = {title: issTitle, body: issBody}
  fetch("https://api.github.com/repos/Gingertonic/javascript-fetch-lab/issues", {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`,
    },
    body: JSON.stringify(issueContent)
  }).then(getIssues())
}

function showResults(json) {
  console.log(json)
  $('#results').html(
    `<div>
      <p><a href="${json.html_url}" target=”_blank” data-owner="${json.owner.login}" data-name="${json.name}">${json.name}</a><br>
      ${json.owner.login}</p>
    </div>`
  )
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(console.log("Forked!"))
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
