const rootURI = 'https://api.github.com/'
const username = 'yanchanllin'
const fork = `${username}/js-ajax-fetch-lab`

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab/';
  //use fetch to fork it!
  fetch(`${rootURI}repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  fetch(`${rootURI}${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({title: title, body: body})
  }).then(resp => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`${rootURI}repos/${fork}/issues`)
  .then(resp => {
    resp.json().then(data => {
      for (let i = 0; i < data.length; i++){
        showIssue(new Issue(data[i]));
      }
    })
  })
}
