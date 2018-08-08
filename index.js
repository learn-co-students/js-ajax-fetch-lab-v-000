function getIssues() {
  const repo = 'yahyal0v3/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`)
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  document.getElementById('issues').innerHTML = `<p><strong>${issue.title}</strong>: ${issue.body}</p>`
}

function createIssue() {
  const repo = 'yahyal0v3/javascript-fetch-lab'
  let issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(issue => getIssues())

}

function showResults(json) {
  document.getElementById('results').innerHTML = '<a href=' + json.html_url + '>' + json.name + '</a>'
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(repo => repo.json())
    .then(forkedRepo => showResults(forkedRepo))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
