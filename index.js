function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showForkedRepo(json) {
  debugger;


}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`

    }
  }).then(function(res){

    const json = res.json()
    debugger;
      showForkedRepo(json)
  })
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'bda7ca5c8863978cb4b8f4fd1fec9c2c0c36f473'
}
