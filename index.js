
const username = ''

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function getIssues(data) {
  const fork = `https://api.github.com/repos/${username}/javascript-fetch-lab/issues`

  fetch(fork).then(resp => {

    resp.json().then( data => {

      for(let i = 0; i < data.length; i++){

        showIssues(new Issue(data[i]))
      }
    })
  })
}

function showIssues(json) {
  $('#issues').append(`<li>Title: <a href="${json.url}">${json.title} </a><span> | Body: ${json.body}</span></li>`)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
 const issueData = { title: issueTitle, body: issueBody }
 debugger
 fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(resp => getIssues())

}

function showResults(json) {
}

function Repo(attributes){
  this.url = attributes.url;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {

    let repo = new Repo(resp);
    showRepo(repo)
  })
}

function showRepo(repo) {
  $('#results').append(`<li>Successfully Forked: <a href="${repo.url}">${repo.url}</a></li>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
