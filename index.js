function getIssues() {
  const repo = 'KristenLeach/javascript-fetch-lab'
  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function renderIssues(issue){
  return `<li><b>Title: </b><span>${issue.title}</span><br>
  <b>URL: </b><span>${issue.html_url}</span><br></li>`
}

function showIssues(json) {
  const issues = json.map(issue => renderIssues(issue))
  $('#issues').html(`<ul>${issues}</ul`)
}

function createIssue() {
  const repo = 'KristenLeach/javascript-fetch-lab'
  const payload = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: /post/, 
    body: JSON.stringify(payload),
    headers: {
      Authorization: `token ${token}`
    }
  })
  getIssues()
}

function showResults(json) {
 $('#results').html(json.html_url)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
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

