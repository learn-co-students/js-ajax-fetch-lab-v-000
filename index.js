const userName = ''
const baseURL = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`


//Repo

function Repo(attributes){
  this.attributes = attributes;
}

function repoTemplate(repo){
  let template = `<h4> ${repo.attributes.url} </h4>`
  return template
}

//Issues


function Issue(title, body){
  this.title = title;
  this.body = body;
}

function issueTemplate(issue){
  let template = `<h4> </h4>`
  return template
}
//GET /repos/:owner/:repo/issues
function getIssues(data) {
  fetch(`${baseURL}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function showIssues(json) {
  let title = json.title
  let body = json.body
  let issue = getIssues(title, body)
  issueTemplate(issue)
  $('#issues').append(issue)
}
//POST /repos/:owner/:repo/issues
function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${baseURL}repos${fork}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}
// Repo
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseURL}repos/${repo}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showIssues(repo);
  })
}

function showForkedRepo(repo){
  $('#results').append(repoTemplate(repo))
}

function getToken() {
  //return 'f2538981f835dcd1a246059323ccbfde67293c44'
  return ''
}
