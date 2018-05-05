function getIssues() {
  const repo = 'marynavoitenko/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`)
  .then(res => {
    res.json()
    .then( issues => {
      issues.forEach(issue => $('#issues').html(issueDisplay(issue)))
    })
  })
}

function issueDisplay(issue) {
  return `<p><strong>${issue.title}</strong> - ${issue.body}</p>`
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value
  const repo = 'marynavoitenko/javascript-fetch-lab'
  const postData = {'title': issueTitle, 'body': issueBody}
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then( res => getIssues() )
}

function showResults(json) {
  result = `<a href="${json.html_url}">${json.name}</a>`
  $('#results').html(result)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
