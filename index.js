function getIssues() {
  const repo = 'javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  for (const issue of json) {
    $('#issues').append(`<a href="${issue.html_url}">${issue.title}</a><br>`)
  }
}

function createIssue() {
  const repo = 'javascript-fetch-lab';
  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues())
}

function showResults(json) {
  let content = `<a href="${json.html_url}">${json.full_name}</a>`;
  $('#results').html(content);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
