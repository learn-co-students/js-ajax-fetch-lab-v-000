function getIssues() {
  const repo = 'jshwa/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json)
  $('#issues').html(json.map(issue => `${issue.title} - ${issue.body}`))
}

function createIssue() {
  const repo = 'jshwa/javascript-fetch-lab'
  const postData = {
    "title": document.getElementById('title').value,
    "body": document.getElementById('body').value,
  };
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => res.json()).then(json => console.log(json));
  getIssues();
}

function showResults(json) {
  console.log(json)
  $('#results').html(`<a href='${json.html_url}'>URL</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
