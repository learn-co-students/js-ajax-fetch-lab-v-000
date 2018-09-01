const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`


function getIssues() {
  const token = getToken();
  fetch(`${baseApi}repos/${fork}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
.then(res => res.json())
.then(json => showIssues(json));
}

function showIssues(json) {
  console.log('here')
}

function createIssue() {
  const token = getToken();
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = {title: title, body: body}
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
     body: JSON.stringify(postData),
     headers: {
       Authorization: `token ${token}`
     }
   })
}

function showResults(json) {
}

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showForkedRepo(json));
}

function showForkedRepo(repo) {
  $('#results').append(`<a href='${repo.html_url}'>My Fork</a>`)
}

function getToken() {
  const token = 'bcb5b6a062c718ce059860e14e436f4baede7bb9';

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'bcb5b6a062c718ce059860e14e436f4baede7bb9'
}
