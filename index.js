let userName;
let repoName;

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function forkRepo() {
  repoName = 'javascript-fetch-lab'
  const repo = `learn-co-curriculum/${repoName}`
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showForkedRepo(json))
}

function showForkedRepo(repo) {
  userName = '' //pull from the repo author data
  let repoHTML = `<a id="repo-link" href="${repo.html_url}">${repo.name}</a>`
  $("#results").append(repoHTML)
  getIssues(repo)
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  const repo = `${userName}/${repoName}`

  let postData = { title: title, body: body}
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  })
}

function getIssues(repo) {
  const repoLink = `${userName}/${repoName}`
  fetch(`https://api.github.com/repos/${repoLink}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(issues) {

  $("#results").append(repoHTML)
}
