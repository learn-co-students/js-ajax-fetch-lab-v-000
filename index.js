function getIssues() {
  const repo = 'fuzzylita/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => res.json()).then(showIssues)
}

function showIssues(json) {
  $("#issues").append(`<a href="${json.html_url}">${json.name}</a>`)  
}

function createIssue() {
  let title = document.getElementById("title").value
  let body = document.getElementById("body").value
  const repo = 'fuzzylita/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`,
    },
    body: {
      title: title,
      body: body
    }
  }).then(getIssues)
}

function showForkedRepo(body) {
  $("#results").append(`<a href="${body.html_url}">${body.name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(showForkedRepo)
}

function getToken() {
  return ''
}