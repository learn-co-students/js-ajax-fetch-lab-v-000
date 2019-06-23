const baseURL = 'https://api.github.com';
const user = 'rstrauss127';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function getHeader(){
  return { Authorization: `token ${getToken()}` }
}

function forkRepo() {
  const prefix = 'https://api.github.com/repos/';
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const postscript = '/forks';
  const path = prefix + repo + postscript;
  fetch(path, {
    method: 'post',
    headers: getHeader()
  }).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  html = `<p id="repo-name">` + json.name + `</p><p div="owner">${json.owner.login}</p> <a href=${json.html_url}> Newly Created Fork</a>`
  document.getElementById('results').innerHTML = html;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#body').value;
  const body = JSON.stringify({ title: title, body: content });
  const path = `https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`;
  fetch(path, {
    method: 'post',
    headers: getHeader(),
    body: body
  })
  .then(res => getIssues());
}

function getIssues() {
  const path = `https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`;
  fetch(path, {
    headers: getHeader()
  })
}
