const user = 'emilyyz92';
const repoName = 'js-ajax-fetch-lab'
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '03980af6437f1ee711534baf88aaa01efba79d01';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  }).then(resp => resp.json()).then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML =
    `<a href="${json.html_url}>"${repoName}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issues = {}
  issues.title = document.getElementById('title').value
  issues.body = document.getElementById('body').value
  fetch(`https://api.github.com//repos/${user}/${repoName}/issues`,
    {
    method: 'POST',
    body: `${json.stringify(issues)}`,
    headers: {Authorization: `token ${getToken()}`}
  }).then(resp => resp.json()).then(json => getIssues(json))
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com//repos/${user}/${repoName}/issues`,
    {
      method: 'POST',
      headers: {Authorization: `token ${getToken()}`}
    }
  ).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  document.getElementById('issues').innerHTML =
    `<ul>` + JSON.parse(json).map(
      issue =>
      '<li>' +
      `<a href="${issue.html_url}">${issue.title}</a>`
      + '</li>').join()
}
