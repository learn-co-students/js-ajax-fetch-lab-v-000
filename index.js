const token = 'de2c3c0d20cd805f8855cb52ceb00740ebf352eb';



function getIssues() {
  const repoUser = 'jlcobos'
  const repo = 'javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repoUser}/${repo}/issues`)
}

function showIssues(json) {
}

function createIssue() {
  const repoOwner = 'jlcobos'
  const repo = 'javascript-fetch-lab'
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  fetch(`https://api.github.com/repos/${repoOwner}/${repo}/issues`, {
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
  const repo = 'javascript-fetch-lab'

  $('#results').append(`<p>Fork was Successful!</p><a href="${json.owner.html_url/`${repo}`}">${json.owner.html_url}</a>`)
}

function forkRepo () {
  const repo = 'learn-co-curriculum/javascript-fetch-lab/'
  fetch(`/api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(data => showResults(data))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
   //token
  return ''
}
