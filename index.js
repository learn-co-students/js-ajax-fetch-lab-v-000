function getIssues() {
  fetch('https://api.github.com/repos/andreanasuto/javascript-fetch-lab/issues', {
  headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issuesDiv = document.getElementById("issues");
  const issuesLis = json.map(issue => `<li><strong>${issue.title}</strong> -- ${issue.body}</li>`).join('');
  issuesDiv.innerHTML = `<ul>${issuesLis}</ul>`;
}

function createIssue() {
  const issueData = {
  title: document.getElementById('title').value,
  body: document.getElementById('body').value
  }
  const url = 'https://api.github.com/repos/andreanasuto/javascript-fetch-lab/issues' //url to post issue

  fetch(url, {
    // POST /repos/:owner/:repo/issues
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
}

function showResults(json) {
  // In showForkedRepo, display the repo information in the browser by appending html with a link to the repository url to the DOM.
  $("results").append()

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab/forks'
  const url = 'https://api.github.com/repos/' + repo
  //use fetch to fork it!
  fetch(url, {
  method: 'post',
  headers: {
    'Authorization': 'token' + getToken()
  }
}).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
