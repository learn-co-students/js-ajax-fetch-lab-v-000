function getIssues() {
  let username = 'anthonygharvey'
  let repo = 'javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${username}/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  $("#issues").append(`<h3>${json.title}</h3><p>${json.body}</p>`)
}

function createIssue() {
  let title = document.getElementById("title").value
  let body = document.getElementById("body").value
  let username = 'anthonygharvey'
  let repo = 'javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${username}/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: {
      "title": title,
      "body": body
    }
  }).then(res => res.json()).then(json => getIssues())
}

function showResults(json) {
  $("#results").html(`<a href=${json.html_url}>${json.name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

const postData = {
  body: 'Great stuff'
}
