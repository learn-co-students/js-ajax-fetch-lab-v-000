function getIssues() {
  fetch('https://api.github.com/repos/alpbourne/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issues = `<ul>${json.map(issue => '<li>' + issue.title + '|' + issues.body + '</li>').join('')}</ul>`
  return $('#issues').append(issues);
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = { title: title, body: body }
  fetch('https://api.github.com/repos/alpbourne/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => resp.json())
    .then(json => getIssues());
}
//
// // function showResults(json) {
// // }
//
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
  const repos = `<a href="$repo.html_url">${repo.name}</a>`
  return $('#results').append(repos);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
