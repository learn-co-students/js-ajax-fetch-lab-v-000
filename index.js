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
  const token = getToken();

  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '4e2b07d04363a4ec4530e98a8ec43ebd21a1d07f';
  //return token;
  return ''
}
