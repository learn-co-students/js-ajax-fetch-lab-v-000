const baseURL = 'https://api.github.com';
const user = 'jomaejercito';
const token = ''
const repo = 'js-ajax-fetch-lab';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => showResults(json))
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>
  ${json.html_url}</a>`;
}

function createIssue() {
  const url = `${baseURL}/repos/${user}/${repo}/issues`;
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  let data = {
    title: title,
    body: body
  }

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
   .then(res => res.json())
   .then(json => getIssues());
}

function getIssues() {
  const url = `${baseURL}/repos/${user}/${repo}/issues`

  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
   .then(res => res.json())
   .then(json => console.log(json));
}
