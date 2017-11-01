
const baseApi = 'https://api.github.com/'


function getIssues() {
  const repoOwner = 'sarahcyrdesign'
  const repo = 'javascript-fetch-lab'
  fetch(`${baseApi}/repos/${repoOwner}/${repo}/issues`)
    .then(res => res.json())
    .then(data => showIssues(data))
}

function showIssues(json) {

}

function createIssue() {
  const repoOwner = 'sarahcyrdesign'
  const repo = 'javascript-fetch-lab'
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  fetch(`${baseApi}/repos/${repoOwner}/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({title:title, body:body})
  })
  .then(res => res.json())
  .then(data => console.log(data))
}

function showResults(json) {
  const repo = "javascript-fetch-lab"

  $('#results').append(`<p>Fork was successful!</p><a href="${json.owner.html_url}/${repo}">${json.owner.html_url}/${repo}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(data => showResults(data))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
