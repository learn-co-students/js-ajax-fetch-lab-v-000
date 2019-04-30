const baseURL = 'https://api.github.com';
const user = 'NotoriousCottonball';


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '9ace9f1d0c839ccc68eb4b9d2e8d85fc764082b1';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`
  
  fetch(url, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const url = `${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  fetch(url, {
    method: 'post',
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
    method: 'GET',
    headers: {
      Authorization: `token: ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));

}
