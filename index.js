function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, 
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(response => response.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href="${json.html_url}" target="_blank">Link to Repo</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = {
    title: issueTitle,
    body: issueBody
  }

  fetch('https://api.github.com/repos/btmccollum/js-ajax-fetch-lab/issues', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => getIssues(json));
}

function getIssues(json) {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('https://api.github.com/repos/btmccollum/js-ajax-fetch-lab/issues')
  .then(response => response.json())
  .then(json => displayIssues(json));
}

function displayIssues(data) {
  const issuesList = `<ul>${data
    .map(
      issue => `<li>${issue.title} - created by: ${issue.user.login} : ${issue.body}</li>`
    ).join('')}</ul>`
  document.getElementById('issues').innerHTML = issuesList;
}
