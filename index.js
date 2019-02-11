const token = '38a8e99d294dcc473e0e95eee7c62f6d23f38c1b';
const repo = 'js-ajax-fetch-lab'
const user = 'howardemilya'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  return fetch(`https://api.github.com/repos/${repo}/forks`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(json => showResults(json))
  //use fetch to fork it!
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  //POST /repos/:owner/:repo/issues
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const data = {title: title, body: body}

  fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  })
}

function getIssues() {
  //GET /repos/:owner/:repo/issues
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/${user}/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  })

}
