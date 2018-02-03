function getIssues() {
  fetch(`https://api.github.com/repos/lpassamano/javascript-fetch-lab/issues`)
    .then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var issues = document.getElementById("issues");
  for (const issue of json) {
    issues.innerHTML += displayIssue(issue);
  }
}

function displayIssue(issue) {
  return `<p><strong>${issue.title}</strong>: ${issue.body}</p>`;
}

function createIssue() {
  const repo = 'lpassamano/javascript-fetch-lab';
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const issueData = {title: issueTitle, body: issueBody};

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues());
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
  var results = document.getElementById('results');
  console.log(json);
  // full_names
  var html = `<a href="${json.html_url}">${json.full_name}</a>`
  results.innerHTML += html;
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
