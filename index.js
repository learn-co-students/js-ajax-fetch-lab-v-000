function getIssues() {
  fetch('https://api.github.com/repos/kyleblee/javascript-fetch-lab/issues').
    then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let issueHTML = "<ul>";
  for (issue of json) {
    issueHTML += `<li><strong>${issue.title}</strong> - ${issue.body} (${issue.user.login})</li>`
  }
  issueHTML += "</ul>"
  $('#issues').html(issueHTML);
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const issueData = {
    title: title,
    body: body
  }

  fetch(`https://api.github.com/repos/kyleblee/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).
    then(getIssues());
}

function showResults(json) {
}

function showForkedRepo(results) {
  $('#results').html(JSON.stringify(results));
  const repoLink = `<a href="${results.html_url}">Go to Fork</a>`;
  $('#results').prepend(repoLink);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function getToken() {
  return '';
}
