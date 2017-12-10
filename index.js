
function getIssues() {
  fetch('https://api.github.com/repos/burrahey/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  document.getElementById("issues").innerHTML = JSON.stringify(json);
}

function createIssue() {
  let titleText = document.getElementById("title").value
  let bodyText = document.getElementById("body").value
  let issue = {title: titleText, body: bodyText}

  fetch('https://api.github.com/repos/burrahey/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
  document.getElementById("results").innerHTML = JSON.stringify(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
  }).then(res => (res.json())).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  const token = '';
  return token
}
