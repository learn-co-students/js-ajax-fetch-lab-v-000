function getIssues() {
  const repo = "kostanzhoglo/javascript-fetch-lab";
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token: ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  $("#issues").append(`<p>Issues<a href="${issue.html_url}">${issue.title}</a></p>`)
}

function createIssue() {
  const repo = "kostanzhoglo/javascript-fetch-lab"
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const issueData = {
    title: issueTitle,
    body: issueBody
  }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token: ${getToken()}`
    },
    body: JSON.stringify(issueData)
  })
  .then(res => res.json())
  .then(getIssues());
}

function showResults(json) {
  $("#results").append(`<p>Forked Successfully!<a href="${json.html_url}">${json.full_name}</a></p>`)
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
    .then(showResults);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
