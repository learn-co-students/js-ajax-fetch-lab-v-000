const rootURL = 'https://api.github.com/';

function getIssues() {
  const repo = 'saurookadook/javascript-fetch-lab';
  fetch(`${rootURL}repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  $('#issues').append(`<a href="${issue.html_url}">${issue.title}</a><br>`)
}

function createIssue() {
  const repo = 'saurookadook/javascript-fetch-lab';
  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(`${rootURL}repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(getIssues())
}

function showResults(json) {
  let result = `<a href="${json.html_url}">${json.full_name}</a>`;
  $('#results').html(result);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`${rootURL}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.join())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
