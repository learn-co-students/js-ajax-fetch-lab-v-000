
const userName = 'curlywallst'

const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

//Issue and Repo objects and templates

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}


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
          displayIssue(displayIssue(data[i]));
        }
      } )
    })
}

function displayIssue(issue) {
  var template = `<li>Title: <a href="${issue.url}">${issue.title} </a><span> | Body: ${issue.body}</span></li>`
  $('#issues').append(template)
}

//Fetch and show repo info

function forkRepo() {
  let token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  // use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
      method: 'post',
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => showForkedRepo(res));
  }

  function showForkedRepo(repo) {
    var template = `<h3>Forked Successfully!</h3><a href="${repo.url}"> ${repo.url}</a>`
    $('#results').append(template)
  }

  function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    return ''
  }


// function forkRepo() {
//   const repo = 'learn-co-curriculum/javascript-fetch-lab'
//
//   fetch(`${baseApi}repos/${repo}/forks`, {
//     method: 'post',
//     headers: {
//       'Authorization': `token ${getToken()}`
//     }
//   }).then(resp => {
//     let repo = new Repo(resp);
//     showForkedRepo(repo);
//   })
// }
//
// function showForkedRepo(repo) {
//   $('#results').append(repo.template())
// }

// const baseApi = 'https://api.github.com/'
// const fork = `${userName}/javascript-fetch-lab`
//
//
// function getIssues() {
// }
//
// function showIssues(json) {
// }
//
// function createIssue() {
// }
//
// function showResults(json) {
// }
//



// function Repo(attributes){
//   this.url = attributes.url;
// }

// Issue.prototype.template = function(){
//    var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
//    return template;
// };

// Repo.prototype.template = function(){
//   var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
//   return template;
// };


// const token = '';
//
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));
//
// const token = '';
// const postData = {
//   body: 'Great stuff'
// };
//
// fetch('https://api.github.com/repos/:curlywallst/git@github.com:learn-co-students/js-ajax-fetch-lab-v-000.git/commits/:sha/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => console.log(res));
