function getIssues () {
  fetch(`https://api.github.com/repos/PRbsas/javascript-fetch-lab/issues`)
    .then(res => res.json())
    .then(json => json.map(issue => showIssues(issue)))
}

function showIssues (json) {
  $('#issues').append(`<p>Issue <a href="${issue.html_url}">${issue.html_url}</a>`)
}

function createIssue () {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  const issue = {title: title, body: body}
  fetch(`https://api.github.com/repos/PRbsas/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showResults (json) {
  $('#results').append(`<p>Forked <a href="${json.html_url}">${json.html_url}</a>`)
}

function forkRepo () {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken () {
  // change to your token to run in browser, but set
  // back to '' before committing so all tests pass
  return ''
}
