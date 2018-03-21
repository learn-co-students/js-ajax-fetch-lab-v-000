function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`https://api.github.com/repos/AutumnJ/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function getIssues(data) {
  fetch(`https://api.github.com/repos/AutumnJ/javascript-fetch-lab/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          showIssues(data[i]);
        }
      } )
    })
}

function showIssues(issue) {
  $('#issues').append(`<li>Title: <a href="${issue.url}">${issue.title} </a><span> | Body: ${issue.body}</span></li>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    // let repo = new Repo(res);
    showForkedRepo(res);
  });
}

function showForkedRepo (res) {
  $('#results').append(`<h3>Forked Successfully!</h3><a href="${res.url}"> ${res.url}</a>`);
}

// below is a better way - should abstract logic so its reusable
// function Repo(attributes){
//   this.url = attributes.url;
// }

// Repo.prototype.template = function(){
//   var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
//   return template;
// };

function getToken() {
  return ''
}
