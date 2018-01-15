const baseApi = "https://api.github.com/"
const fork = 'dbfarms/javascript-fetch-lab'
//https://api.github.com/repos/dbfarms/javascript-fetch-lab

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

	
Issue.prototype.template = function(){
   var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
};

function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`). 
  then(resp => {
    resp.json().then(data => {
      for (let i=0;i<data.length;i++) {
        displayIssue(new Issue(data[i]));    
      }
    } )
  })
}


//function showIssues(json) {
//  
//}


function displayIssue(issue) {
  debugger
  $('#issues').append(issue.template())
}



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




function showResults(json) {
}



function Repo(attributes){
  //debugger
  this.url = attributes.url;
}


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

Repo.prototype.template = function() {
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template 
}

function showForkedRepo(repo) {
  //debugger
  $('#results').append(repo.template())
}



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ''
  return token // ''
  
}
