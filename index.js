

function getIssues() {
  const repo = 'javascript-fetch-lab';
  const owner = "buchheimt";
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    header: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  let issuesHTML = json.map(issue => `<p>${issue.title}</p><p>${issue.body}</p>`)
  $('#issues').html(issuesHTML);
}

function createIssue() {
  const repo = 'javascript-fetch-lab';
  const owner = "buchheimt";
  const postData = {};
  postData.title = document.getElementById('title').value;
  postData.body = document.getElementById('body').value;
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => getIssues());
}

function showResults(json) {
  repoHTML = `<p><a href="${json.html_url}">${json.name}</a></p>`
  $('#results').html(repoHTML);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  const token = '';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}
