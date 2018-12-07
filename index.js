function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = 'https://api.github.com/repos/' + repo + '/forks';
  fetch(url, { method: 'POST', headers: {Authorization: 'token' + getToken()} })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  const results = document.getElementById('results').innerHTML;
  results = '<a href="' + json.html_url + '">' + json.html_url + '</a>';
}

function createIssue() {
  const repo = 'xplor8r/js-ajax-fetch-lab';
  const url = 'https://api.github.com/repos/' + repo + '/issues';
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const issueData = {title: issueTitle, body: issueBody};
  fetch(url, { method: 'POST', body: JSON.stringify(issueData), headers: {Authorization: 'token' + getToken()} })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  const repo = `xplor8r/js-ajax-fetch-lab`;
  const url = 'https://api.github.com/repos/' + repo + '/issues';
  fetch(url, { headers: {Authorization: 'token' + getToken()} })
    .then(res => res.json())
    .then(json => console.log(json));
}
