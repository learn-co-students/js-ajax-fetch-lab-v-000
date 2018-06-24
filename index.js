const userName = 'heislercreative'
const baseApi = 'https://api.github.com/repos/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues(issues) {
  fetch(`${baseApi}${fork}/issues`).then(res => {
    res.json().then(issues => {
      for (let i = 0; i < issues.length; i++){
        showIssues(new Issue(issues[i]))
      }
    })
  })
}

function showIssues(issue) {
  $('#issues').html(issue.template())
}

function createIssue() {
  const title = document.getElementById('title').value
  // const title = $('#title').val()
  const body = document.getElementById('body').value
  // const body = $('#body').val()
  const issue = { title: title, body: body}

  fetch(`${baseApi}${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issue)
  }).then(res => getIssues())
}

Issue.prototype.template = function() {
  return `<br><li>
      Title: <a href="${this.url}">${this.title}</a>
      <span> | ${this.body}</span>
    </li>`
}

function Issue(res) {
  this.title = res.title
  this.body = res.body
  this.url = res.html_url
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseApi}${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    let repo = new Repo(json)
    showForkedRepo(repo)
  })
}

Repo.prototype.template = function(){
  return `<h4>Forked Successfully!</h4><a href="${this.url}">${this.url}</a>`
};

function Repo(res){
  this.url = res.html_url
}

function showForkedRepo(repo) {
  $('#results').html(repo.template())
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
