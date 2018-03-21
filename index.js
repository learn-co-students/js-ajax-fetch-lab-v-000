const githubApi = 'https://api.github.com/'
const userName = "chrisjamesr"
function setUser(user){
  return user;
}

function getAuthUser(){
  fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res=> res.json()).then(json=> {setUser(json.login)}); 
}


function getIssues() { //GET /issues
  fetch(`${githubApi}repos/${userName}/javascript-fetch-lab/issues`,
    {
      headers: {
      Authorization: `token ${getToken()}`
      }
    }).then(res=> res.json()).then(json=> showIssues(json))
}

function showIssues(json) {
  let issues = '<ul>'+json.map(i=>{
    return (`
      <li><a href="${i.url}">${i.title}</a></li>
    `)
  }).join('') + '</ul>'
  document.getElementById("issues").innerHTML = issues;
}

function createIssue() { //POST /repos/:owner/:repo/issues
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let post = {title: title, body: body}
  fetch(`${githubApi}repos/${userName}/javascript-fetch-lab/issues`, 
    {
      method: 'post',
      headers: {
        Authorization: `token ${getToken()}`
      },
      body: JSON.stringify(post)
    }).then(getIssues()); 
}


function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${githubApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res=> res.json()).then(json=> showForkedRepo(json))
}

function showForkedRepo(res){
  let results = res
  let template = `<h3>Repo Forked!</h3><a href="${results.url}">${results.url}</a>` 
  document.getElementById("results").innerHTML = template;
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
  // return ''
}

// document.addEventListener("DOMContentLoaded", function(event){
//   fetch("https://api.github.com/user", {
//     headers: {
//       Authorization: `token ${getToken()}`
//     }
//   }).then(res=> res.json()).then(json=> {setUser(json.login)}); 

//    document.getElementById("author-partial-template").innerHTML)
// });

// fetch('https://api.github.com/repos/chrisjamesr/js-ajax-fetch-readme-v-000/commits/99e4842dbcc1a6a3b153f0101d3620a09d386792/comments', 
//   {
//     method: 'POST', 
//     body: JSON.stringify(postData), 
//     headers:{Authorization: `token ${token}`}
//   }
//   ).then(res=>console.log(res)); 

// fetch('https://api.github.com/user/', {
//   method: 'GET', 
//   headers:{
//     Authorization: 'token 124f6a39a65c8a6a771c369140bc422b3f7a2ec2'
//     }
//   }
// ).then(res=> {let testRes = res});