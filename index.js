
function getIssues() {
  fetch('https://api.github.com/repos/DashaDaria/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const details = `<ul>${json.map(j => '<li>' + j.title + ' - ' + j.body + '</li>').join('')}</ul>`
  $('#issues').append(details);
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const issueData = {
    title: title,
    body: body
  }

  fetch('https://api.github.com/repos/DashaDaria/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(getIssues());
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json){
  const details = `<a href="${json.html_url}">${json.name}</a>`
  $('#results').append(details);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
