const baseURL = 'https://api.github.com';
const user = 'gitluky';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  //use fetch to fork it!
  const token = getToken();
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  let resp = ''
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then( function (json) {
    forkedRepoUrl = json.url;
    showResults(json);
  });
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const forkedHtmlUrl = `<ul>${
  '<li>' +
  json.html_url +
  '</li>'
  }</ul>`
  document.getElementById('results').innerHTML = forkedHtmlUrl;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const token = getToken();
  const issueDetails= { title: document.getElementById('title').value, body: document.getElementById('body').value  };

  fetch(`https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(issueDetails),
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(() => getIssues());

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const token = getToken();
  fetch(`https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(function (json) {
    const issueListHtml =
    `<ul>${ json
      .map(issue =>'<li>' + issue.title + ' - ' + issue.body + '</li>')
      .join('')}</ul>`
    document.getElementById('issues').innerHTML = issueListHtml;
    })

}
