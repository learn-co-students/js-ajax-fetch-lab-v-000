const baseURL = 'https://api.github.com';
const user = 'ryanmanchester';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  //return token;
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  fetch(baseURL + '/repos/' + repo + '/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  } )
  .then(resp => resp.json())
  .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const results = document.getElementById('results');
  return results.innerHTML += json.html_url;
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(baseURL+ '/repos/' + repo + '/issues',{
    method: 'POST',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => getIssues())
}

function getIssues() {
  const result = document.getElementById('issues');
  const repo = `${user}/js-ajax-fetch-lab`;
  fetch(baseURL + '/repos/' + repo + '/issues', {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => console.log(json));
}
