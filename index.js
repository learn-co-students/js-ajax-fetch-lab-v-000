const baseUrl = 'https://api.github.com'
const myRepo = 'scirocco21/javascript-fetch-lab'

function forkRepo() {
  const learnRepo = "learn-co-curriculum/javascript-fetch-lab"
  fetch(`${baseUrl}/repos/${learnRepo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo)
}

function showForkedRepo(json) {
  $('results').html(`<a href="${json.html_url}">${json.full_name}</a>`)
}

function getIssues() {
  fetch(`https://api.github.com/repos/${myRepo}/issues`)
  .then(res => res.json())
  .then(json => showIssues(json));
}

function showIssues(json) {
  $("#issues").html(res);
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch(`https://api.github.com/repos/${myRepo}/issues`, {
    method: 'post',
    title: title,
    body: body,
    headers: {
      Authorization: `token ${getToken()}`
    }
}).then(getIssues);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
