function getIssues() {
}

function showIssues(json) {
  $("#results").html("<a href=`${json.html_url}`>")
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it
  fetch(`https://api.github.com/repos/${repo}/forks`)
  .then(resp => resp.json())
  .then(json => console.log(json));

  fetch('https://api.github.com/repos/ynebuhs/javascript-fetch-lab/forks', {
    method: 'POST',
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => showResults(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
