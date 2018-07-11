const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

//Issue and Repo objects and templates

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes){
  this.url = attributes.url;
}

Issue.prototype.template = function(){
   var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
};

Repo.prototype.template = function(){
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
};

//Create an issue through the Github API

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

//Fetch all issues through the Github API and display / append to the DOM

function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function displayIssue(issue) {
  $('#issues').append(issue.template())
}

//Fetch and show repo info


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

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
  $('#results').append(repo.template())
}


function getToken() {
  return ''
}

// function getIssues() {
// }
//
// function showIssues(json) {
// }
//
// function createIssue() {
//   const issueTitle = document.getElementById('title')
//   const issueBody = document.getElementById('body')
//
//
// }
//
// function showResults(json) {
// }
//
// function forkRepo() {
//   const repo = 'learn-co-curriculum/javascript-fetch-lab';
//
//   fetch(`https://api.github.com/repos/${repo}/forks`, {
//     method: 'post',
//     headers: {
//       Authorization: `token ${getToken()}`
//       }
//     }).then(res => showForkedRepo(res));
//   }
//
// function showForkedRepo(response) {
//   const url = `<a href="${response.url}">${response.url}</a>`
//   $("#results").html(url)
// }
//
// function getToken() {
//   //change to your token to run in browser, but set
//   //back to '' before committing so all tests pass
//   return ''
// }
