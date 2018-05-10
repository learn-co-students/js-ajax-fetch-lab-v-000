const usernameAndRepo = `hmelo1/javascript-fetch-lab`
const apiURL = 'https://api.github.com/repos'

function createIssue() {
  const token = getToken()
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const postData = { title: title, body: body }

  fetch(`${apiURL}/${usernameAndRepo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify(postData)
  }).
  then(res => getIssues())
}

function getIssues(json) {
  const token = getToken()

  fetch(`${apiURL}/${usernameAndRepo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issues = json.map(function(issue) {
    return `<div>
              <h2>Issue Title: ${issue.title}</a></h2>
              <h4>${issue.body}</h4>
            </div>`
    })

  $('#issues').html(issues)
}

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${apiURL}/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
  $('#results').html(`<a target="_blank" href="https://github.com/${json.full_name}" id="forked-repo">${json.full_name}</a>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
