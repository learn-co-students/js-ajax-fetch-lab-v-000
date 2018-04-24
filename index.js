function getIssues(data) {
  fetch('https://api.github.com/repos/moresmiles/javascript-fetch-lab/issues').
  then(resp => {
  resp.json().then( data => {
    for (let i = 0; i < data.length; i++){
      showIssues(data[i]);
    }
  })
})
}

function showIssues(issue) {
  $('#issues').append(`<li>Title: <a href="${issue.url}">${issue.title} </a><span> | Body: ${issue.body}</span></li>`)
}

function createIssue() {
  //post /repos/:owner/:repo/issues
  const titleData = document.getElementById('title').value
  const bodyData = document.getElementById('body').value
  const issueData = {title: titleData, body: bodyData}
  fetch('https://api.github.com/repos/moresmiles/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: getToken()
    },
    body: JSON.stringify(issueData)
  }).then(res => getIssues());
}

function showResults(json) {
  $('#results').html(`<div> <a href="${json.html_url}"> ${json.html_url} </a> </div>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  // /repos/:owner/:repo/forks
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: getToken()
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
