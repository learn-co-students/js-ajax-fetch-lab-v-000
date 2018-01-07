const userName = ''
const rootUrl = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function Issue(attributes) {
  this.title = attributes.title;
  this.body = atributes.body;
  this.url = attributes.url;
}

Issue.prototype.template = function(){
  var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
  return template;
}

function showIssues(json) {
  $('#issues').append(issue.template());
}

function createIssue() {
  var issueTitle = document.getElementById('title').value;
  var issueBody = document.getElementById('body').value;
  var postData = {title: issueTitle, body: issueBody}
  var issueUrl = `${rootUrl}repos/${fork}/issues`
  fetch(issueUrl, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => {
    getIssues();
  })
}

function getIssues(json) {
  var issueUrl = `${rootUrl}repos/${fork}/issues`
  fetch(issueUrl).then(resp => {
    resp.json().then(issues => {
      for (let i = 0 ; i < issues.length ; i ++) {
        showIssues(new Issue(data[i]));
      }
    })
  })
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  var forkRepoUrl = `${rootUrl}repos/${repo}/forks`;
  fetch(forkRepoUrl, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp =>{
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo.template())
}

function Repo(attributes) {
  this.url = attributes.url;
}

Repo.prototype.template = function(){
  var template = `<h3>Forked Successfully</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
