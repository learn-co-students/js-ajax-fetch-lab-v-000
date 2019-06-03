function getToken () {
  return ''
}

function forkRepo() {
  const token = getToken()
  return fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      "Authorization": `token ${token}`
    }
  }).then(res => res.json).then(json => showResults(json))
}

function showResults(json) {
  document.getElementById('results').append(`<p> ${json.html_url} </p>`)
}

function createIssue(owner,repo) {
  const title_issue = document.getElementById('title').value
  const body_issue = document.getElementById('body').value
  const postData = {
    title: title_issue,
    body: body_issue
  }
  const token = getToken()
  return fetch('https://api.github.com/repos/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
            Authorization: `token ${token}`,
        },
    body: JSON.stringify(postData)
  }).then(response => response.json())
}

function getIssues() {
  const token = getToken()
  const url = 'https://api.github.com/repos/javascript-fetch-lab/issues'

  fetch(url,{
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json).then(json => displayIssues(json))
}

function displayIssues(json) {
  debugger
}
