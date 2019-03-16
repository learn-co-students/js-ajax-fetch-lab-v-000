function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
    return '';
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  //use fetch to fork it!
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}> ${json.html_url} </a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueText = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  const create_issue_url = 'https://api.github.com/repos/ryanwevans/js-ajax-fetch-lab/issues';

  fetch(create_issue_url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueText)
  });

  getIssues();
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const issues_url = 'https://api.github.com/repos/ryanwevans/js-ajax-fetch-lab/issues'
  fetch(issues_url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showIssues(json));
}


function showIssues(json) {
  const issueList = json
    .map(
      i =>
        i.title + ' - ' + i.body + '<br>'
    )
    .join('');
  document.getElementById('issues').innerHTML = issueList;
}
