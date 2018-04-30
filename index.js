function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showForkedRepo(json) {



}

function forkRepo() {

  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token getToken()`
    }
  }).then(function(res){
    debugger;
    const json = res.json()

      showForkedRepo(json)
  })
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
