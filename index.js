const username = 'lindsay-c-dennis';
const fork = `${username}/javascript-fetch-lab`;

function Repo(attributes) {
  this.url = attributes.url;
}

function Issue(attributes) {
  this.title = attributes.title
  this.body = attributes.body
  this.url = attributes.url;
}

Issue.prototype.template = function() {
  let template = `<li>Title: <a href="${this.url}">${this.title}</a><span>Body: ${this.body}</span></li>`;
  return template;
}

Repo.prototype.template = function() {
  let template = `<h3>Forked Successfully!</h3><a href="${this.url}">${this.url}</a>`;
  return template;
};

function getIssues(data) {
  fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`).then(res => {
    res.json().then( data => {
      for (let i=0; i<data.length; i++) {
        displayIssue(new Issue(data[i]));
      }
    })
  })
}

function displayIssue(issue) {
  $('#issues').append(issue.template());
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody }

  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token: ${getToken()}`
    },
    body: JSON.stringify(postData),
  }).then(res => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
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
  $('#results').append(repo.template());
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
