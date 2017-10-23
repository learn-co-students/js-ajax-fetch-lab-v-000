let repoName = 'javascript-fetch-lab'
let repoOwner = 'smithwebtek'
const token = ''
// LEARNCO_GITHUB_API_TOKEN in .env file

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return token
  return ''
}

function myRepos(){
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showForkedRepo(repo){
  repoName = repo.split('/')[1]
  const repoURL  = `<a href="https://github.com/smithwebtek/${repoName}">repo URL</a>`
  $('#results').html(repoURL)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}` 
    }
  }).then(res => showForkedRepo(repo));
}
 
function getIssues() {
  let url = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  let issuesHTML = '<ul>'
  for (let i = 0; i < json.length; i++){
    let issue =  `<li>Title: ${json[i].title} <br> Body: ${json[i].body}</li>`
    issuesHTML += issue
  }
  issuesHTML += '</ul>'
  document.getElementById('issues').innerHTML = issuesHTML
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let url = `https://api.github.com/repos/smithwebtek/${repoName}/issues`
  
  const postData = {
    title: title,
    body: body
  }  
  fetch(url, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}` 
      }
    }).then(resp => resp.json())
    .then(json => getIssues(json))
}
