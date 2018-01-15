const token = ''
const userName = 'hyoyou'

//Fetch and show repo info
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
  //return token
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => $('#results').html(showForkedRepo(json)))
}

function showForkedRepo(json) {
  return `<h3>Forked Successfully!</h3><a href="${json.html_url}" id="url" target="_blank">${json.html_url}</a>`
}

//Fetch all issues through the Github API and display / append to the DOM
function Issue(attributes) {
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url
}

function getIssues() {
  fetch(`https://github.com/${userName}/javascript-fetch-lab/issues`).
    then(resp => {
      resp.json().then(json => {
        for (let i = 0; i < json.length; i++){
          showIssues(new Issue(data[i]));
        }
      })
    })
}

function showIssues(json) {
  const issueList = "<ul>" + json.map(i => {
    `<li>
      <h3>${i.title}</h3>
      <p>${i.body}</p>
      <a href="${i.html_url} target="_blank">${i.title}</a>
    </li>
    `}).join('')
  $('#issues').html(getIssues);
}

//Create an issue through the Github API
function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`https://github.com/${userName}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}
