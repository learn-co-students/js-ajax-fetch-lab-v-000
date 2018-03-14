const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => {
      resp.json().then(data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      })
    })
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = {title: issueTitle, body: issueBody}
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

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `toke ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
