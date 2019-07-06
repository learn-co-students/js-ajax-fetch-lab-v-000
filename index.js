const baseURL = 'https://api.github.com';
const user = 'Marie-Burns22';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  fetch(`${baseURL}/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url} >Repo Link</a>`
}

function createIssue() {
  let issueTitle = document.getElementById('title').value
  let issueBody = document.getElementById('body').value
  const repo = 'js-ajax-fetch-lab';
  const postData = {
    title: `${issueTitle}`,
    body: `${issueBody}`
  };

  fetch(`${baseURL}/repos/${user}/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => getIssues(json));
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  const repo = 'js-ajax-fetch-lab';
  fetch(`${baseURL}/repos/${user}/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
  .then(json => issueList(json))

  function issueList(json) {
    const issues = `<ul>${json
        .map(i =>
          '<li>' +
          i.title + '</li>'
          ).join('')}</ul>`;
    document.getElementById('issues').innerHTML = issues
  };
}
