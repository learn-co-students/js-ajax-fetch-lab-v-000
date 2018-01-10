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
  const token = ''//ec03f6938c4eee91f22b704380612333bdad2fba;
  fetch('api.github.com/repos/' + repo + '/', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
  // showForkedRepo()
}

// function showForkedRepo() {
//   document.getElementById('results').append(json())
// }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
