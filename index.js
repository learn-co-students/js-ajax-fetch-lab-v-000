function getIssues() {
  const urls = document.querySelectorAll("a")
  const url = urls[1].href + '/issues'
  const elements = url.split('/')
  const owner = elements[3]
  const repo = elements[4]
  const token = getToken()

  fetch(`https://api.github.com/repos/skmcloughlin/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => showIssues(json));

}

function showIssues(json) {
  const issues = []
  var issue = {}
  json.forEach(function(element) {
    document.getElementById("results").innerHTML += '<br>'
    document.getElementById("results").innerHTML += `Title: ${element.title}    Body:${element.body}`
    document.getElementById("results").innerHTML += '<br>'
});
}

function createIssue() {
  const urls = document.querySelectorAll("a")
  const url = urls[1].href + '/issues'
  const elements = url.split('/')
  const owner = elements[3]
  const repo = elements[4]
  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value
  const token = getToken()

  fetch(`https://api.github.com/repos/skmcloughlin/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify({
      "title": `${issueTitle}`,
      "body": `${issueBody}`
    }),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(getIssues())
}

function showResults(obj) {
  let url = obj.html_url
  document.getElementById("results").innerHTML =  '<a href="'+url+'">Link to Forked Repo</a>'
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(obj => showResults(obj));
}

function getToken() {
  return ''
}
