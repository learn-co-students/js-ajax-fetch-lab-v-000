const repoIssues = 'https://api.github.com/repos/btcline04/javascript-fetch-lab/issues';

function getIssues() {
  fetch(repoIssues).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issuesList = '<ul>' + json.map(issue => `<li>Title: ${issue.title}</li><li>Body: ${issue.body}</li></br>`).join('') + '</ul>'
  $("#issues").append(issuesList);
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const postData = {
    'title': title,
    'body': body
  };

  fetch(repoIssues, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues());
}

function showResults(json) {
  $('#results').append(`<a href="${json.html_url}">${json.html_url}</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
