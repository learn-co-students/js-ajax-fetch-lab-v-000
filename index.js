function getIssues() {
  fetch(
    "https://api.github.com/repos/ecssiah/javascript-fetch-lab/issues",
    {
      method: 'get',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  let html = "<ul>"

  for (const issue of json) {
    html += `<li>${issue.title}<br><p>${issue.body}</p></li>`
  }

  html += "</ul>"

  $('#issues').html(html)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  const data = {
    title: title,
    body: body
  }

  fetch(
    "https://api.github.com/repos/ecssiah/javascript-fetch-lab/issues",
    {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(getIssues())
}

function showResults(json) {
  const link = `<a href="${json.html_url}">${json.html_url}</a>`

  $('#results').html(link)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(
    "https://api.github.com/repos/" + repo + "/forks",
    {
      method: 'post',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
