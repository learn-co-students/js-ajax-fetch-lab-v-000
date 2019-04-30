response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
const baseURL = 'https://api.github.com';
const user = 'NotoriousCottonball';
const token = '7685cf7c288cd1ae9fe0a4b15cdd191e32923144';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab-v-000';
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
  const url = `${baseURL}/repos/${user}/js-ajax-fetch-lab-v-000/issues`;
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
  const url = `${baseURL}/repos/${user}/js-ajax-fetch-lab-v-000/issues`;

  fetch(url, {
    headers: {
      Authorization: `token: ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => document.getElementById('issues').innerHTML = json.map(
        i => i.title + `<br />`));
}
