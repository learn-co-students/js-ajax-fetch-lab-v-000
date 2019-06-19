const baseURL = 'https://api.github.com';
const user = 'lpzraf';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(baseURL + '/repos/' + repo + '/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let formTitle = document.getElementById('title').value
  let formContent = document.getElementById('body').value
  let contentObject = {
    "title": formTitle,
    "body": formContent
  }

  fetch(baseURL + '/repos/' + user + '/' + repo + '/issues', {
    method: 'POST',
    body: JSON.stringify(contentObject),
    headers: {
      Authorization: `token ${getToken()}`
    }
})
  .then(res => res.json())
  .then(json => console.log(json));



function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
