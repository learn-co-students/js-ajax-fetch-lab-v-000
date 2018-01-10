function Repo(attributes){
  this.url = attributes.url;
}

Repo.prototype.template = function() {
  var template = `<a href="${this.url}"> ${this.url}</a>`
}

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

Issue.prototype.template = function() {
  var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
};


function getIssues(data) {
  // GET /repos/:owner/:repo/issues
  fetch('api.github.com/repos/AdamT213/javascript-fetch-lab/issues')
    .then(res => {
      res.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      })
    })
  }


function showIssues() {
  document.getElementById('issues').append(issue.template())
}


function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  const token = getToken()
  fetch('api.github.com/repos/AdamT213/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues())
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch('https://api.github.com/repos/' + repo + '/' + "forks/", {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => {
    let repo = new Repo(res);
    showForkedRepo(repo);
  })
}
function showForkedRepo(repo) {
  document.getElementById('results').append(repo.template())
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
