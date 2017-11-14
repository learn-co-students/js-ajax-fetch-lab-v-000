const repo = 'javascript-fetch-lab'
const userName = 'mel510'

function getIssues() {
  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
   let issues = json.map(issue =>
     `<li>${issue.url}</li>`
   ).join("");
   document.getElementById('issues').innerHTML = "Issues:" + issues;
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify({title:title, body:body})
  })
  getIssues();
}

function showForkedRepo(json) {
  document.getElementById('results').innerHTML = `Forked: <a href='${json.html_url}'>${json.html_url}</a>`;
}

function forkRepo() {
  fetch(`https://api.github.com/repos/learn-co-curriculum/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
