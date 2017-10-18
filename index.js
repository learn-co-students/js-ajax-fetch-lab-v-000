function getIssues() {
  const repo = `https://api.github.com/repos/mekowalski/javascript-fetch-lab/issues`
  fetch(repo, {
    method: 'GET'
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let array = json.map(issue => `<li>${issue.title}</li><ul><li>${issue.body}</li></ul>`).join("")
  $("#issues").append(`<ul>${array}</ul>`)
}

function createIssue() {
  const repo = 'mekowalski/javascript-fetch-lab'
  const token = getToken()
  const titleIssue = document.getElementById('title').value
  const bodyIssue = document.getElementById('body').value
  const postData = {title: `${titleIssue}`, body: `${bodyIssue}`}

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function showForkedRepo(res) {
  $('#results').append(`<p><a href="${res.html_url}">${res.html_url}</a></p>`)
}

function getToken() {
  return ''
}
