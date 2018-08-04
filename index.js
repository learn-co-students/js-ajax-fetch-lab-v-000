const username = 'avelineamour'
const repo = 'javascript-fetch-lab'
const learn = 'learn-co-curriculum'
const ghAPI = 'https://api.github.com'

function getIssues() {

  fetch(`${ghAPI}/repos/${username}/${repo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));

}

function showIssues(issues) {

  const issueList = issues.map(issue =>
    `<li><strong>${issue.title}</strong></li>
    <li>${issue.description}</li>
    <li><a href="${issue.html_url}">Issue Links</a></li>`)

  $('#issues').html(`<ul>${issueList}</ul`)
}

function createIssue() {

  const title = document.getElementById('title').value
  const body =  document.getElementById('body').value
  const issue = {title: title, body: body}

  fetch(`${ghAPI}/repos/${username}/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issue)
  })
  getIssues()
}


function showResults(repo) {
  const fork = `<a href="${repo.html_url}">Your Forked Repository</a>`
  $('#results').html(fork)
}

function forkRepo() {

  fetch(`${ghAPI}/repos/${learn}/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  return ''
}
