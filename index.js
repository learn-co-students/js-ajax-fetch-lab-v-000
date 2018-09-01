function getIssues() {
  const repo = 'javascript-fetch-lab/issues';
  fetch(repo, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken}`
    }
  })
}

function showIssues(json) {
  document.getElementById('body').innerHTML = json;
}

function createIssue() {
  const repo = '/javascript-fetch-lab/issues/';
  fetch(repo, {
    method: 'post',
    body: 'test body',
    headers: {
      Authorization: `token ${getToken}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/';
  //use fetch to fork it!
  fetch(repo, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken}`
    }
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
