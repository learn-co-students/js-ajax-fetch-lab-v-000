const username = ""

function getIssues() {
  fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let result = document.getElementById('issues')
  result.append(json)
}

function createIssue() {
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`, {
    method: 'post',
    title: `${title}`,
    body: `${body}`,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showResults(json) {
  let result = document.getElementById('results')
  result.append(json)
  result.append(`<a href="${json.url}">Repo</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post', headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
