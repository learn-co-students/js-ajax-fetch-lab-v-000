getToken()

const baseURL = 'https://api.github.com';
const user = 'NotoriousCottonball';
const token = '';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`
  
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const url = `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`;
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  fetch(url, {
    method: 'POST',
    headers: {
      Authentication: `token: ${getToken()}`
    },
    body: JSON.stringify({ 
        title: `${title}`,
        body: `${body}`
    })
  })
  .then(getIssues());
}

function getIssues() {
  const url = `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`;

  fetch(url, {
    headers: {
      Authorization: `token: ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => document.getElementById('issues').innerHTML = json.map(
        i => i.title + `<br />`));
}
