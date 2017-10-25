const token = ''
const owner = "MichaelBurak"
const repobase = "javascript-fetch-lab"
const api = 'https://api.github.com/'
const fork = `${owner}/${repobase}`

function getIssues() {
  fetch(`${api}repos/${fork}/issues`, {
    method: 'get',
    headers: {
    Authorization: `token ${token}`
  }
  })
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${api}repos/${fork}/issues`, {
    method: 'post',
    headers: {
    Authorization: `token ${token}`
  },
  body: JSON.stringify(postData)
  })
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${api}repos/${repo}`, {
   method: 'post',
   headers: {
   Authorization: `token ${token}`
 }
 })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
