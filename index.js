const baseURL = 'https://api.github.com';
const user = 'ronsala';
const token = '';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  console.log(url);
  //use fetch to fork it!
  fetch(url,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
    ).then(resp => resp.json()).then(data => showResults(data));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log('json', json);
  document.getElementById('results').innerHTML += `<a href="${json.html_url}">${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'ronsala/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/issues`;
  const postContent = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(url,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      },
      body: JSON.stringify(postContent)
    }).then(response => response.json())
    .then(data => {getIssues();});
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'ronsala/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/issues`;
  const issuesList = document.getElementById('issues');
  fetch(url,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    });
}
