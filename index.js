function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueText = document.getElementById('body').value
  fetch('https://api.github.com/repos/iamtraviscole/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify({ title: issueTitle, body: issueText })
  }).then(resp => {
    getIssues();
  })
}

function getIssues() {
  fetch('https://api.github.com/repos/iamtraviscole/javascript-fetch-lab/issues')
  .then(resp => {
    resp.json()
      .then( data => {
        for (let i = 0; i < data.length; i++) {
          showIssues(data[i])
        }
      })
    })
}

function showIssues(issue) {
  $('#issues').append(`<li>
                      Title: <a href="${issue.url}">${issue.title}</a><br>
                      Body: ${issue.body}
                      </li>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {
    showForkedRepo(resp);
  })
}

function showForkedRepo(repo) {
  $('#results').append(`<a href="${repo.url}">${repo.url}</a>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
