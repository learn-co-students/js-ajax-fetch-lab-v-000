const name = '' //would be your actual token if you were doing this for realz
const api = 'https://api.github.com/'
const fork = `${name}/javascript-fetch-lab`

//contructors
function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes){
  this.url = attributes.url;
}

//create issue and repo templates
Issue.prototype.template = () => `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
Repo.prototype.template = () => `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`

//create le issue
function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const data = { title: title, body: body }
  fetch(`${api}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(resp => getIssues())
}

//Fetch issues
function getIssues(data) {
  fetch(`${api}repos/${fork}/issues`).
    then(resp => {
      resp.json()
      .then(data => { for (i = 0; i < data.length; i++) displayIssue(new Issue(data[i])) } )
    })
}

//display issues to le DOM
const displayIssue = issue => $('#issues').append(issue.template())

//Fetch and show repo info
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${api}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

const showForkedRepo = repo => $('#results').append(repo.template())

function getToken() {
  return ''
}
