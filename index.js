const baseURL = "https://api.github.com/"


function getIssues() {
  fetch(`${baseURL}repos/TheInvalidNonce/javascript-fetch-lab/issues`)
    .then(resp=>resp.json())
    .then(json=>json.map(issue=>showIssues(issue)))
}

function showIssues(issue) {
  $('#issues').append(`<h3>New Issue</h3><a href="${issue.html_url}">${issue.html_url}</a>`)
}

function createIssue() {
  const title = document.getElementById('title').value
  const text = document.getElementById('body').value
  const issue = {title: title, body: text}

  fetch(`${baseURL}repos/TheInvalidNonce/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `${getToken()}`
    },
    body: JSON.stringify(issue)
  }).then(resp => resp.json())
    .then(json => console.log(json))
    .then(getIssues())
}

function showResults(json) {
}

var showForkRepo = (repo) => {
  $("#results").append(`<h3>Fork Successful!</h3><a href="${repo.html_url}"> ${repo.html_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseURL}repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `${getToken()}`
    }
  }).then(res => res.json())
    .then(json => showForkRepo(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
