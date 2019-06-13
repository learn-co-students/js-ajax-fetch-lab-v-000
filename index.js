const baseURL = 'https://api.github.com';
const user = '';

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
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => showResults(json))
}

function showResults(json) {
  const result = document.getElementById('results');
  result.innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;

  const newIssue = {
    'title': `${title}`,
    'body': `${body}`
  }

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(newIssue)
  })
  .then(response => response.json())
  .then(json => getIssues(json))
};

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`}
    })
    .then(response => response.json)
    .then(json => showIssues(json))
};

function showIssues(json) {
  document.getElementById('issues').append( `${json}`)
}
