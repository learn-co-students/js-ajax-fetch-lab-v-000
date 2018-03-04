const token = "12345"
const rootUri = "https://api.github.com/repos/"
const repo = "learn-co-curriculum/javascript-fetch-lab"

function getIssues() {
  const uri = rootUri + repo + issues
}

function showIssues(json) {
}

function createIssue() {
  const uri = 'javascript-fetch-lab/issues'
  const postData = document.getElementById('body')
  fetch(uri, {
  method: 'post',
  body: JSON.stringify('test body'),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => console.log(res));
}

function showResults(json) {
}

function forkRepo() {
  // const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const uri = rootUri + repo
  fetch(uri, {
  method: 'post',
  // body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => console.log(res));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
