const baseApi = 'https://api.github.com/'

function Issue(attributes) {
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes) {
  this.url = attributes.url;
}

// Repo.prototype.template() = function () {
//   let template = `<h3>Forked Successfully!</h3><a href="${this.url}">${this.url}</a>`
//   return template;
// }

function getIssues(data) {
  fetch(`${baseApi}repos/rh24/javascript-fetch-lab/issues`).then(resp => {
    resp.json().then(data => {
      for(let i = 0; i < data.length; i++) {
        showIssue(new Issue(data[i]));
      };
    });
  });
}

function showIssue(issue) {
  $('#issues').append(issue.template())
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody };
  fetch(`${baseApi}repos/rh24/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
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
