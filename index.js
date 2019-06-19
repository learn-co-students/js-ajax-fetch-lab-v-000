const baseURL = 'https://api.github.com';
const user = 'codingmamakaz';
// const token = ' 4dcaba4cea7646da42e24fbecbac840a7786380b'
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
  const myIssues = baseURL + '/repos/' + user + repo + '/issues'

  fetch(myIssues, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`},
    body: JSON.stringify({title: issueTitle, body: issueBody})
    })
}
function getIssues() {
  // const repo = '/js-ajax-fetch-lab'
  // const myIssue = baseURL + '/repos/' + user + repo + '/issues'
  // const 
  // document.getElementById('issues').innerHTML = issues;

  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

// GET /repos/:owner/:repo/issues