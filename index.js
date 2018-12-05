let ownerRepo = 'mseaman6/js-ajax-fetch-lab';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //Append this link to the results div
  const forkedRepo = '<a href="' + json.html_url + '">New Repo</a>';
  ownerRepo = json.full_name;
  document.getElementById('results').innerHTML = forkedRepo;
}

function createIssue() {
  const issueData = {
    title: title.value,
    body: body.value
  };

  fetch('https://api.github.com/repos/' + ownerRepo + '/issues', {
    method: 'POST',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  });

  getIssues();
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('https://api.github.com/repos/' + ownerRepo + '/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(function(json) {
    const issues = json;
    const issuesList = `<ul>${issues
      .map(
        issue =>
          '<li><strong>' +
          issue.title +
          '</strong> - ' +
          issue.body +
          '</li>'
      ).join('')}</ul>`;
    document.getElementById('issues').innerHTML = issuesList;
  });
}
