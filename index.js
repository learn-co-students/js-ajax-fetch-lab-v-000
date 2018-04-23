const repoIssues = 'https://api.github.com/repos/ary770/javascript-fetch-lab/issues';

function getIssues() {
  fetch(repoIssues).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issuesList = '<ul>' + json.map(issue => `<li>Tittle: ${issue.title}</li><li>Body: ${issue.body}</li></br>`).join('') + '</ul>'

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

function showForkedRepo(json) {
  $("#results").append(`<a href=${json.svn_url}>${json.svn_url}</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json(res)).then(json => showForkedRepo(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
