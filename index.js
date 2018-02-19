const username = ''
const baseURL = 'https://api.github.com/repos'
const fork = `${username}/javascript-fetch-lab`

function getIssues() {
  fetch(`${baseURL}/repos/${fork}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const results = json.map(j => `<div><h4>${j.title}</h4><p>${j.body}</p><hr></div>`).join('');
  // append results so that you get the newest one too
  $('#issues').append(results);
}

function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`${baseURL}/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues());
}

function showResults(json) {
  const results = `<h3>Repo forked successfully!</h3><a href="${json.html_url}">${json.html_url}</a>`
  $('#results').html(results);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseURL}/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
