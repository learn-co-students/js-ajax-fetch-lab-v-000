// const token = '6730dd407cd98672f10c922d0372ddc172fbae5f'

function getIssues(json) {
  const repo = 'jendobes/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issuesList = "<ul>" + json.map(issue => `<li>Title: ${issue.title}<br>Body: ${issue.body}</li>`).join('') + "</ul>"
  $('#issues').append(issuesList)
}

function createIssue() {
  const repo = 'jendobes/javascript-fetch-lab'
  let titleData = document.getElementById('title').value
  let bodyData = document.getElementById('body').value
  let data = {title: titleData, body: bodyData}
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => getIssues())
}


function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json(res)).then(json => showForkedRepo(json))
}

function showForkedRepo(json) {
  $('#results').append(`<a href=${json.svn_url}> ${json.svn_url}</a>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
