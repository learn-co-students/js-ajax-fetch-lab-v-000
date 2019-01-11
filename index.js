const base = 'https://api.github.com/repos';
const user = 'FKRauber';
const learnRepo = 'learn-co-curriculum/js-ajax-fetch-lab';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const url = `${base}/${learnRepo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(result => result.json())
  .then(json => showResults(json));
}

function forkRepo() {
  const url = `${base}/${learnRepo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.htmml_url}</a>`;
}


function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${base}/${repo}/issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(result => result.json())
  .then(json => getIssues());
}



function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${base}/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(result => result.json())
  .then(json => console.log(json));
}
