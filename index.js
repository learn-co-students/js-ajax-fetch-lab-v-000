const baseURL = '/api.github.com';
const user = 'mstmari';
const token = ''
const repo = 'js-ajax-fetch-lab';


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  // POST /repos/:owner/:repo/forks
  const userName = 'learn-co-curriculum';

  const url = `${baseURL}/repos/${userName}/${repo}/forks`

    fetch(url, {
      method: 'POST',
      headers: {
      Authorization: `token ${getToken()}`
    }
    })
  .then(val => val.json())
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href= ${user}/${json.html_url}>${json.name}</a>`

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  //From github API  POST /repos/:owner/:repo/issues
  let data = {
    title: title,
    body: body
  }
  const url = `${baseURL}/repos/${user}/${repo}/issues`

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`,
      'Content-Type': "application/json"

    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(json => console.log(json))
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating

  // GET /repos/:owner/:repo/issues
  const url = `${baseURL}/repos/${user}/${repo}/issues`

  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => res.json())
    .then(json => document.getElementById('results').innerHTML = json.title);
// document.getElementById('results').innerHTML = json.title
}
