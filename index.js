const baseURL = 'https://api.github.com';
const user = 'codingmamakaz';
const token = ''

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const fullUrl = baseURL + '/repos/' + repo + '/forks'
  fetch(fullUrl, {
    method: 'POST', 
    headers: {
      Authorization: `token ${token}`}
  }).then(response => response.json())
  .then(json => showResults(json));
}

function showResults(json) {
  const result = `<a href="${json.html_url}">${json.html_url}</a>`
  document.getElementById('results').innerHTML = result;
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const repo = '/js-ajax-fetch-lab'
  const issues = baseURL + '/repos/' + user + repo + '/issues'
  // const issueList = document.getElementById('issues').value

  fetch(issues, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`},
    body: JSON.stringify({title: issueTitle, body: issueBody})
    })
    .then(response => response.json())
    .then(obj => getIssues(obj));
}


function getIssues(){
  const repo = '/js-ajax-fetch-lab'
  const issuesUrl = baseURL + '/repos/' + user + repo + '/issues'

  fetch(issuesUrl, {
    headers: {
      Authorization: `token ${token}`}
  })
  .then(response => response.json())
  .then(obj => displayIssues(obj))
}

function displayIssues(issuesArr){
  let listIssues = '<ul>'
  issuesArr.forEach(issue => {
    listIssues += `<li>${issue.title}</li>`
  })
  '</ul>'
  document.getElementById('issues').innerHTML = listIssues;
}
