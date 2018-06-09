const base = 'https://api.github.com'
const username = 'safuya'
const lab = 'javascript-fetch-lab'

function getIssues() {
  fetch(`${base}/repos/${username}/${lab}/issues`, {
    headers: { Authorization: `token: ${getToken()}` }
  }).then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  fetch(`${base}/repos/${username}/${lab}/issues`, {
    method: 'post',
    headers: { Authorization: `token ${getToken()}` },
    body: JSON.stringify({ title, body })
  }).then(_ => getIssues())
}

function showResults(json) {
  console.log(json)
}

function forkRepo() {
  return fetch(`${base}/repos/learn-co-curriculum/${lab}/fork`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json)
    .then(json => showResults(json))
}

function getToken() {
  return ''
}
