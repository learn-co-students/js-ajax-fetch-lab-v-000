function getIssues() {
  const repo = 'surla/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => showIssues(json))
}

function showIssues(issues) {
  let issue = issues.map(function(issue) {
    $("#issues").append(
      `<h3>${issue.title}</h3><p>${issue.body}</p>`
    )
  })
}

function createIssue() {
  const repo = 'surla/javascript-fetch-lab'

  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  let postIssues = {
    title: title,
    body: body
  }

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postIssues),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues())
}

function showResults(json) {
  console.log(json)
  $("#results").append(`<a href="${json.html_url}">${json.full_name}</p>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  return '';
}
