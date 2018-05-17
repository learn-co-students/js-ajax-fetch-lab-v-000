// const token = '6730dd407cd98672f10c922d0372ddc172fbae5f'

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
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res))
}

function showForkedRepo() {
  $('#results').append()
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '6730dd407cd98672f10c922d0372ddc172fbae5f'
  // return ''
}
