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
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = { title: title, body: body }
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

function forkRepo() {
  console.log("forkRepo connected here")

  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post', // or 'PUT'
    headers:{
      'Authorization': `token ${getToken()}`,
      'content-type': 'application/json'
    },
    mode: "cors"
  })
  .then(res => res.json())
  .then(json => {
    console.log(json);
    let html = json.url;
    showForkedRepo(html);
  });

}

function showForkedRepo(repo) {
  $('#results').append(`<a href="${repo}">${repo}</a>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return ''
}
