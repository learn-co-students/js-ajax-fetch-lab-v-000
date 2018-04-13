const rootURL = 'https://api.github.com/';

function getIssues(data) {
  const repo = 'ultimatecrispy/javascript-fetch-lab'
  fetch(`${rootURL}repos/${repo}/issues`)
}

function showIssues(json) {
  const newIssue = `Issue Created: <br> <a href="${json.html_url}" >${json.title}</a>`
  document.getElementById('issues').innerHTML = newIssue;
}

function createIssue() {
  const repo = 'ultimatecrispy/javascript-fetch-lab'
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  const postData = {
    title: title,
    body: body
  };

  fetch(`${rootURL}repos/${repo}/issues`,{
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => showIssues(json));
}

function showForkedRepo(json) {
  const forkedRepo = `Repo forked! View on Github: <br> <a href="${json.html_url}" >${json.full_name}</a>`
  document.getElementById('results').innerHTML = forkedRepo;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${rootURL}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => showForkedRepo(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
