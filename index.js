const token = getToken();

function getIssues() {
  const fork = 'mcansh/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then(resp => resp.json())
    .then(data => showIssues(data));
}

function showIssues(json) {
  const div = document.getElementById('issues');
  for (let i = 0, l = json.length; i < l; i++) {
    $('#issues').append(`<li>${json[i].title}</li>`);
  }
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const issue = { title, body };
  fetch('https://api.github.com/repos/mcansh/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(issue),
  }).then(resp => getIssues());
}

function showResults(json) {
  $('#results').append(`<h3>Fork:</h3><a href="${json.html_url}"> ${json.html_url}</a> - ${json.name}`,);
}

function forkRepo() {
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks',
    {
      method: 'post',
      headers: {
        Authorization: `token ${token}`,
      },
    },
  )
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  // change to your token to run in browser, but set
  // back to '' before committing so all tests pass
  return '';
}
