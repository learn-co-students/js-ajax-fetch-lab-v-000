const repo = 'js-ajax-fetch-lab'
const owner = 'learn-co-curriculum'
const user = "scrptktty"

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  // POST /repos/:owner/:repo/forks
  fetch(`https://api.github.com/repos/${owner}/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
  }).then(response => response.json())
    .then(json => showResults(json))

}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML =
    `<a href="${json.html_url}">Repo</a>`
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  const postData = { body: 'test body'}
  fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData)
    headers: {
      Authorization: `token ${token}`
    },
  }).then(response => response.json())
    .then(json => showResults(json))

}

function getIssues(json) {
  document.getElementById('issues').innerHTML =
     `<ul>` + JSON.parse(json).map(
       i =>
       '<li>' +
       `<a href="${i.html_url}">${issue.title}</a>`
       + '</li>').join()}
}
