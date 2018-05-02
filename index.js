function getIssues() {
  fetch('https://api.github.com/repos/IngridWong0715/javascript-fetch-lab/issues',{
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(function(res){
    return res.json();
  }).then(showIssues)

}


function showIssues(json) {
  let html = "<ul>"
  json.forEach(function(issue){
    html+= `<li> ${issue.title} ${issue.body} by ${issue.user.login}</li>`
  })
  html+="</ul>"

  $("#issues").html(html)

}

function createIssue() {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const issueData = {title: title, body: body}

  const issueDataJson = JSON.stringify(issueData)

  fetch('https://api.github.com/repos/IngridWong0715/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: issueDataJson
  }).then(getIssues)
}

function showForkedRepo(json) {
  $("#results").html(`<div> View repo <a href="${json.html_url}">here</a></div>`)

}

function forkRepo() {

  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(function(res){
    const json = res.json()
    return json
  }).then(showForkedRepo)
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '0902d5d569fb1afd915ae13b597a0b50dfa649eb'
}
