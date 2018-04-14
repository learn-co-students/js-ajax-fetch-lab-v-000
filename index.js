const userName = 'johnfewell'

function forkRepo(){
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch("https://api.github.com/repos/" + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(parseJSON)
  	.then(showForkedRepo)
}

function parseJSON(response) {
	return response.json()
}

function showForkedRepo(json) {
 $('#results').append(`<a id="result" data-owner="${json.owner.login}" href="${json.html_url}">${json.html_url}</a>`)
}

function getIssues(){
  const repo = '/javascript-fetch-lab'
  // const owner = $('#result').attr("data-owner")
  fetch(`https://api.github.com/repos/${userName}${repo}/issues`)
      .then(parseJSON)
      .then(addIssuesToDom)
}

function addIssuesToDom(issuesArray) {
	issuesArray.forEach(function(issue) {
   $('#issues').append(`<li>Title: <a href="${issue.url}">${issue.title} </a><span> | Body: ${issue.body}</span></li>`)
	})
}

function createIssue() {
  const baseUrl = "https://api.github.com/repos/"
  const repo = '/javascript-fetch-lab'
  // const owner = $('#result').attr("data-owner")
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }

  fetch(baseUrl + userName + repo +'/issues', {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues())
}

function getToken() {
  return ''
}
