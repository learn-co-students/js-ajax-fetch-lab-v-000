const baseUrl = 'https://api.github.com'
const user = 'saecollins'
const repo = 'js-ajax-fetch-lab'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const learnRepo = `learn-co-curriculum/${repo}`;
  //use fetch to fork it!

  fetch(`${baseUrl}/repos/${learnRepo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  $('#results').html(`<a href="${json.html_url}"> ${json.html_url}</a>`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const params = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`${baseUrl}/repos/${user}/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`${baseUrl}/repos/${user}/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}
