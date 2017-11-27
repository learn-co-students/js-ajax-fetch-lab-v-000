const rootUri = 'https://api.github.com/repos/'

function getIssues() {
  fetch('https://api.github.com/repos/rjcolmed/javascript-fetch-lab/issues')
  .then(res => res.json()
  .then(data => data.map(data => showIssues(data))))
}

function showIssues(json) {
  $('#results').append(`<li>Title: <a href="${json.url}">${json.title} </a><span> | Body: ${json.body}</span></li>`)
}

function createIssue() {
  const repo = 'rjcolmed/javascript-fetch-lab'
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const postData = {
    title: title,
    body: body
  }
  fetch(rootUri + repo + '/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
        Authorization: `token ${getToken()}`
    }
  }).then(res => showForkedRepo(res));
}

function showForkedRepo(res) {
  alert(res.name);
  $('#results').html('<a href="' + res.html_url + '">'+ res.name + '</a>');
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
