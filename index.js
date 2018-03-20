const repoURI = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
const issueURI = 'https://api.github.com/repos/javascript-fetch-lab/issues'

function forkRepo() {
  fetch(repoURI, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => {
    this.url = resp.url;
    showForkedRepo(resp);
  })
}

function showForkedRepo(resp){
  $('#results').append(`Forked: <a href="${this.url}"> ${this.url}</a>`);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

//issues


function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  fetch(issueURI, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: 'title: ${issueTitle}, body: ${issueBody}'
  }).then(resp => {
    this.url = resp.url;
    this.body = resp.body;
    this.title = resp.title;
    showIssues(resp);
  })
}

//Fetch all issues through the Github API and display / append to the DOM

function getIssues(resp) {
}


function showIssues(data) {
  $('#issues').append(`<li>Title: <a href="${data.url}">${data.title} </a><br>Body: ${data.body}</li>`)
}
