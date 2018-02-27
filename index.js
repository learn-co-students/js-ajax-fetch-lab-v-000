const baseApi = 'https://api.github.com/'

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  console.log(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //c2781b17d78121eeceedd44e0a0e301c1261a74a
  return 'c2781b17d78121eeceedd44e0a0e301c1261a74a'
}
