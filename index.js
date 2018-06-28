function getIssues() {
  fetch(`https://api.github.com/repos/Areid987/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issueResults = json.map(issue => `
    <ul>
      <li>${issue.title}</li>
      <li>${issue.body}</li>
    </ul>`).join('')
  $("#issues").append(`${issueResults}`)
}

function createIssue() {
  //debugger
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const issueData = { title: issueTitle, body: issueBody}
  fetch(`https://api.github.com/repos/Areid987/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(res => getIssues())
}

function showResults(json) {
  $("#results").html(`<a href="${json.html_url}">${json.html_url}</a>`)
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '' //'78cad142ec3e2304b5c6735471f252f4730f5bdd'
}
