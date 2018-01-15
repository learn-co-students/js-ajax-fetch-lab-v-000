function getIssues() {
  const repo = 'christinetran825/javascript-fetch-lab';
  fetch('https://api.github.com/repos/' + repo + '/issues').then(res => res.json()).then(json =>  showIssues(json));
}

function showIssues(json) {
  resultsAsString = '<ul>'
  for (const issue of json) {

    resultsAsString += `<li>User:${issue.user.login}</li><li>Title: ${issue.title} </li><li>>Body: ${issue.body}</li><br/>`

  }
  resultsAsString += '</ul>'
  var results = document.getElementById('issues');
  results.innerHTML += resultsAsString
}

function createIssue() {
  var issueTitle = document.getElementById("title").value;
  var issueBody = document.getElementById("body").value;

  const repo = 'baschenbrenner/javascript-fetch-lab';

  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      "title": issueTitle,
      "body": issueBody
    })
    }).then(res => {
      console.log(res);
      getIssues();
      })
}

function showResults(json) {
  var results = document.getElementById('results');
  results.append(string)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    console.log(res);
    showForkedRepo(res.url)})
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
