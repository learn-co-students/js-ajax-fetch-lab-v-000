const rootUrl = 'https://api.github.com/repos';
const repo = 'javascript-fetch-lab';
let user = '';

function getIssues() {
  fetch(`${rootUrl}/${user}/${repo}/issues`)
    .then(resp => resp.json())
    .then(json => showIssues(json));
}

function showIssue(issue) {
  return `
    <li>
    <h3><a href="${issue.html_url}">${issue.title}</a></h3>
    <strong><small><a href="${issue.user.html_url}">${issue.user.login}</a></small></strong><br>
    <span style="opacity:0.5;">${issue.state}</span><br>
    <small>${issue.body}</small>
    </li>
  `
}

function showIssues(issuesJson) {
  const issues = document.getElementById("issues");

  issues.innerHTML = `
    <ol>
      ${issuesJson.map(issue => showIssue(issue)).join("")}
    </ol>
  `
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const postData = {
    title:title,
    body:body,
  }
  fetch(`${rootUrl}/${user}/${repo}/issues`, {
    method:'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => getIssues());
}

function showForkedRepo(repoJson) {
  const results = document.getElementById("results");
  user = repoJson.owner.login

  results.innerHTML = `<a href="${repoJson.html_url}" target="_blank">${repoJson.name}</a>`;
}

function forkRepo() {
  const learn = "learn-co-curriculum/"
  fetch(`${rootUrl}/${learn + repo}/forks`, {
    method:'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => showForkedRepo(json));
}

function getToken() {
  return ''
}
