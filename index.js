function getIssues() {
   const repo = 'aback1227/javascript-fetch-lab'
   fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
   }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(issues) {
 let issue = issues.map(function(issue) {
    $('#issues').append(
      `<h3>${issue.title}</h3><p<${issue.body}</p>`
      )
 })
}

function createIssue() {  
  const repo = 'aback1227/javascript-fetch-lab'
  let body = document.getElementById("body").value
  let title = document.getElementById("title").value

  let postIssues = {
    title: title,
    body: body
  }

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    body: JSON.stringify(postIssues),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues())

}

function showResults(json) {
  $("#results").append(`<a href="${json.html_url}">${json.name}</a>`)
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
