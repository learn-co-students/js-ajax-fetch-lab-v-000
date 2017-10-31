function getIssues() {
  const repo = `https://api.github.com/repos/codykas/javascript-fetch-lab/issues`
  fetch(repo).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let array = json.map(issue => `<li>${issue.title}</li><ul><li>${issue.body}</li></ul>`).join("")
  $("#issues").append(`<ul>${array}</ul>`)
}

function createIssue() {
  const repo = 'codykas/javascript-fetch-lab'
  const token = getToken()
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = {
    title: `${issueTitle}`,
    body: `${issueBody}`
  }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(() => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function showForkedRepo(res){
  $("#results").append(`<p><a href="${res.html_url}">${res.html_url}</a></p>`)
}

function getToken() {
  return ''
}
