function getIssues() {
  const user = "julee117/javascript-fetch-lab"
  fetch(`https://github.com/${user}/issues`).
    then(res => res.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const issues =
    `<ul>${json.map(issue =>
      '<p>' + issue.title + '</p>' +
      '<p>' + issue.body + '</p>'
    )}</ul>`;
  $('#issues').html(`${issues}`)
}

function createIssue() {
  const user = "julee117/javascript-fetch-lab"
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = {
    title: title,
    body: body
  };

  fetch(`https://github.com/${user}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
  $('#results').html(`<a href=${json.html_url}>Repository</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
