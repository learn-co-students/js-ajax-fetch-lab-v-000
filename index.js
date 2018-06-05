const token = '6f7d718125a001255edf6e2b2f1685ec6f11f4c7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

function getIssues() {
  const repo = 'chaimoosh/javascript-fetch-lab/issues'
  fetch(`https://api.github.com/repos/${repo}`)
}

function showIssues(json) {
}

function createIssue() {
  const repo = 'chaimoosh/javascript-fetch-lab/issues'
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: "test body"
  })
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
  })
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
