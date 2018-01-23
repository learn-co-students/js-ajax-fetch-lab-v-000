function Repo(attributes){
  this.url = attributes.url;
}

function Issue(atributes){
    this.title = attributes.title;
    this.body = attributes.body;
    this.url = attributes.url;
}

Repo.prototype.template = function(){
  var template = `<a href="${this.url}"> ${this.url}</a>`;
  return template;
}

Issue.prototype.template = function () {
  var template = `<a href="${this.url}">${this.title}</a> Issue: ${this.body}`;
  return template;
}

function getIssues() {
  const repo = 'javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`).
    then(res => {
      res.json().then( data => {
        for(let ind = 0; ind < data.length; ind++){
            debugger;
          showIssues(new Issue(data[i]));
        }
      })
    })
}

function showIssues(issue) {
  $('#issues').append(issue.template())
}

function createIssue() {
  const issueTitle = document.getElementById("title").value;
  const issueText = document.getElementById("body").value;
  const repo = 'zoebisch/javascript-fetch-lab';
  const issueData = {title: issueTitle, body: issueText};
  debugger;
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(res => getIssues())
}

function showResults(json) {
  debugger;
  $('#results').append(json.template());
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => {
    let repo = new Repo(res);
    showResults(repo);
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
