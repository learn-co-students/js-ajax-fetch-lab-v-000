const url = `https://api.github.com`

function getIssues() {
  const repo = 'Jschles1/javascript-fetch-lab'
  fetch(`${url}/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  return json.map(issue => {
    return (
      `<div>
        <p>${issue.title}</p><br>
        <p>${issue.body}</p><br>
        <p>${issue.url}</p>
      </div><br>`
    )
  })
}

function createIssue() {
  const repo = 'Jschles1/javascript-fetch-lab'
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const issueData = {
    "title": title,
    "body": body
  }
  fetch(`${url}/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(getIssues)
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">Fork Link</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${url}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
