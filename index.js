const userName = ''
const rootURL = "https://api.github.com/"

//authorization notation
//fetch('https://api.github.com/user/repos', {
//  headers: {
//    Authorization: `token ${token}`
//  }
//}).then(res => res.json()).then(json => console.log(json));

function showForkedRepo(json){
  $('#results').append(`<a href="${json.html_url}">${json.html_url}</a>`)
}

function getIssues() {
  fetch(`${rootURL}repos/${userName}/javascript-fetch-lab/issues`).
  then(res => res.json()).
  then(json => showIssues(json))
}

function showIssues(json) {
  $('#issues').append('<ul>' + json.map(j =>
    `<li>
     <h4>title: ${j.title}</h4>
     <p>body: ${j.body}</p>
     </li>`
  ).join('') + '</ul>')
}

function createIssue() {
  let issueTitle = document.getElementById('title').value
  let issueText = document.getElementById('body').value
  let data = {title: issueTitle, body: issueText}
  fetch(`${rootURL}repos/${userName}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(json => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${rootURL}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showForkedRepo(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
