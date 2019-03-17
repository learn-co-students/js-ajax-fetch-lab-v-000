const baseURL = 'https://api.github.com/repos/';
const repo = 'js-ajax-fetch-lab/'
const user = 'Nadiafa';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  //use fetch to fork it!
  const repoToFork = `${baseURL}learn-co-curriculum/${repo}forks`
  fetch(repoToFork, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repoIssue = `${baseURL}${user}/${repo}issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(repoIssue, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues()); 

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repoIssue = `${baseURL}${user}/${repo}issues`;
  fetch(repoIssue, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

