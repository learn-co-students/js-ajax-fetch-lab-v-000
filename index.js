function getIssues() {
  fetch('https://api.github.com/repos/dsbondin/javascript-fetch-lab/issues', {
    headers: { Authorization: `token ${getToken()}`},
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issueTemplate = function(issue) { return `<div><p>${issue.title} - ${issue.body}</p></div>`}
  const issuesHTML = json.map(issue => issueTemplate(issue)).join('')
  $("#issues").html(issuesHTML)
}

function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch('https://api.github.com/repos/dsbondin/javascript-fetch-lab/issues', {
    method: 'post',
    headers: { Authorization: `token ${getToken()}`},
    body: JSON.stringify(postData)
  }).then(getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: { Authorization: `token ${getToken()}`}
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function showForkedRepo(json) {
  console.log(json.html_url)
  const forkedRepoHTML = `<div><a href="${json.html_url}">Forked Repo Link</div>`
  $("#results").html(forkedRepoHTML)
}




function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
