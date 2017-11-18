const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function Repo(attr) {
  this.url = attr.url;
}

function Issue(attr) {
  this.title = attr.title;
  this.body = attr.body;
  this.url = attr.url;
}

Repo.prototype.template = function() {
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
};

Issue.prototype.template = function() {
  var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
  return template;
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
  }


function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`)
    .then(resp => {
      resp.json().then( data => {
        for ( let i = 0; i < data.length; i ++ ) {
          displayIssue(new Issue(data[i]));
        }
      })
    })
}

function displayIssue(issue) {
  $('#issues').append(issue.template())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    let repo = new Repo(res);
    showForkedRepo(repo);
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo.template())
}

function getToken() {
  return ''
}
