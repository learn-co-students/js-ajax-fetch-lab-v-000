function getIssues() {
  //GET /repos/:owner/:repo/issues
  const repo = 'dicksonca/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json().then(json => showIssues(json)))
}

function showIssues(json) {
  const issues = json.map(j => {
    return (`<div>
      <ul>
      <li>
      <h4>${j.title}</h4>
      <p><em>${j.user.login}</em></p>
        <p>${j.body}</p>
        </li>
        </ul>
        </div>
      `)
  }).join('')

  $('#issues').html(issues)
}

function createIssue() {
  const issue = 'kristinreddington/javascript-fetch-lab'
  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(`https://api.github.com/repos/${issue}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }

  }).then(getIssues())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch('https://api.github.com/repos/' + repo + '/' + "forks", {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }

  }).then(res => res.json().then(json => showForkedRepo(json)))
}

function showForkedRepo(json) {
  const repoDisplay = `<a href="${json.html_url}">Forked Repo</a>`
  $("#results").html(repoDisplay)
}

function getToken() {
  //back to '' before committing so all tests pass
    const token = '';
  return ''
}
