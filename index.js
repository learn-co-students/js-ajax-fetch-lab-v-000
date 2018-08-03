const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'
const fork = 'https://api.github.com/repos/ashley3schultz/javascript-fetch-lab'

function getIssues() {
  fetch(`${fork}/issues`, {
  })
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++){
        displayIssue(new Issue(data[i]));
      }
    });
}

function showIssues(json) {
  $('#issues').append(`<h4>Issues</h4><a href="${json.html_url}">${json.title}</a>`);
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(getIssues());
}

function showResults(json) {
  debugger
  $('#results').append(`<h4>Forked Successfully!</h4><a href="${json}">${json}</a>`);
}

function forkRepo() {
  fetch(`${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  const token = ''
  return token
}
