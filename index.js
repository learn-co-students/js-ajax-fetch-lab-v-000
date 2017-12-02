function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showForkedRepo(body) {
  $("#results").html("<a href=`${body.html_url}`>${body.name}</a>")
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).
then(showForkedRepo);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
