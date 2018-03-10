function getIssues() {
  fetch('https://api.github.com/repos/ChristianEgglin/javascript-fetch-lab/issues')
    .then(response => response.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issuesDiv = document.getElementById("issues");
  const issuesLis = json.map(issue => `<li><strong>${issue.title}</strong> -- ${issue.body}</li>`).join('');
  issuesDiv.innerHTML = `<ul>${issuesLis}</ul>`;
}

function createIssue() {
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;
  const postData = {title: issueTitle, body: issueBody}
  fetch(`https://api.github.com/repos/ChristianEgglin/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => getIssues())
}

function showResults(json) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<a href="${json.html_url}" target="_blank">${json.name}</a>`;
}

function forkRepo() {
  const ownerRepo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${ownerRepo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
