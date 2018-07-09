function getIssues() {
  const repo = 'micholi/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json().then(json => showIssues(json)))
}

function showIssues(json) {
  const issueData = json.map(i =>
    `<ul>
      <li>
        <h4>Title: ${i.title}</h4>
        <p>Description: ${i.body}</p>
      </li>
    </ul>`).join('')
  $("#issues").append(`${issueData}`)
}

function createIssue() {
  const issueRepo = 'micholi/javascript-fetch-lab'
  const issueTitle = document.getElementById('title').value
  const issueText = document.getElementById('body').value
  const issueInfo = { title: issueTitle, body: issueText }

  fetch(`https://api.github.com/repos/${issueRepo}/issues`, {

    method: 'post',
    body: JSON.stringify(issueInfo),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues())
  }

function showResults(json) {
  $("#results").html(`<a href="${json.html_url}">${json.html_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
