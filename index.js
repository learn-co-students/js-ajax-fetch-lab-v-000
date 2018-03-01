function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = '/api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'
  // const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(repo,  {method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
  }
  })
  // .then(resp => resp.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
  // const token = 'f5c2a844cb5fb2eea5c1259692997a8017988abf';
  // return token
  // fetch('https://api.github.com/user/repos', {
  //   headers: {
  //     Authorization: `token ${token}`
  //   }
  // }).then(res => res.json()).then(json => console.log(json));
}
