function getIssues(json) {
  fetch('https://api.github.com/repos/dtow55/javascript-fetch-lab/issues').then(res => showIssues(res));
}

function showIssues(json) {
  link = `<a id='url' href='${json.url}'>Link</a>`;
  document.getElementById('issues').innerHTML = link;
}

function createIssue() {
  title = document.getElementById('title').value;
  body = document.getElementById('body').value;

  fetch(`https://api.github.com/repos/dtow55/javascript-fetch-lab/issues`, {
    method: 'post',
    title: title,
    body: body,
    headers: {Authorization: `token ${getToken()}`}
  }).then(res => getIssues(res));
}

function showResults(json) {
  link = `<a id='url' href='${json.url}'>Link</a>`;
  document.getElementById('results').innerHTML = link;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`}
  }).then(res => showResults(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
