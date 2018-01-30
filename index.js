const baseApi = `https://api.github.com`

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch('POST', `${baseApi}/repos/${repo}/forks`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then()
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
