function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = 'https://api.github.com/repos/' + repo + '/forks'
  //use fetch to fork it!
  fetch(
    url, {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(json => showResults(json));
}
// POST /repos/:owner/:repo/forks

function showResults(json) {
  //use this function to display the results from forking via the API
  const resultLink = document.createElement('a');
  resultLink.href = `${json.html_url}`;
  document.getElementById("results").innerHTML = resultLink;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;
  const data = {title: issueTitle, body: issueBody};
  const url = 'https://api.github.com/repos/brittanygrebnova/js-ajax-fetch-lab/issues'

  fetch(
    url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => getIssues(json));
}

function getIssues(json) {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const username = 'brittanygrebnova'
  const url = 'https://api.github.com/repos/' + username + '/js-ajax-fetch-lab/issues'
  fetch(
    url, {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  .then(res => res.json())
  .then(json => document.getElementById("issues").innerHTML += '<div>' + `Issue: ${json.title}` + '</div>')

}
