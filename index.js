function getIssues() {
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues`, {
    method: 'GET',
    headers: {
     	    Authorization: `token ${getToken()}`
     	  }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  json.forEach(function(issue) {
    $('#issues').append(`<li>Title: <a href="${issue.url}">${issue.title} </a><span> | Body: ${issue.body}</span></li>`)
  })
}

function createIssue() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const postData = {title: title, body : body};
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
 	    Authorization: `token ${getToken()}`
 	  }
  }).then(res => getIssues())
}

function showForkedRepo(json) {
  $('#results').html(`<h3>Forked Successfully!</h3><a href="${json.url}"> ${json.url}</a>`)
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
 	    Authorization: `token ${getToken()}`
 	  }
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function getToken() {
  const token = ""
}

$(document).ready(function() {
  getIssues()
})
