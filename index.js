
function getIssues() {
  const repo ='kfecho30/javascript-fetch-lab'
  const token = getToken()

    fetch(`https://api.github.com/repos/${repo}/issues/`, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const issues = json.map(issue => `<li><b>Title: </b><span>${issue.title}</span><br>
    <b>URL: </b><span>${issue.html_url}</span><br></li>`)

  $('#issues').html(`<ul>${issues}</ul`)
}

function createIssue() {
  const repo ='kfecho30/javascript-fetch-lab'
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  const token = getToken()
  fetch('https://api.github.com/repos/${repo}/issues/', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  })
  getIssues()
}

function showResults(json) {
  $('#results').append(json.html_url);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  return ''
}
