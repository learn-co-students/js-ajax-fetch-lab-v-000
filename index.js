function getIssues() {
}

function showIssues(json) {
  console.log(json);
}

function createIssue() {
  const repo = 'https://api.github.com/repos/jacobsilver2/javascript-fetch-lab/issues'
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(repo, {
    method: 'POST',
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }).then(res => res.json()).then(json => showIssues(json))
}

function showResults(json) {
  // console.log(json);
  const link = `<a href="${json.html_url}">Repository URL</a>`
  console.log(link);
  $('#results').html(link)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'cc88d391dac23e8773dcf5a7609c32a18993dcb1'
}

