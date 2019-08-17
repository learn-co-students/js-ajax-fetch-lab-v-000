const baseURL = 'https://api.github.com';

let user = '';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => {
    user = json.owner.login;
    repoName = json.name;
    console.log(json.owner.login);
    showResults(json);
  });
  //use fetch to fork it!
};

function showResults(json) {
  const results = document.getElementById('results');
  const forkLink = document.createElement('a');
  forkLink.href = json.html_url;
  forkLink.textContent = json.name;
  results.appendChild(forkLink);
  //use this function to display the results from forking via the API
};

function createIssue() {
  fetch(`https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify({
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    }),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => getIssues());
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  fetch(`https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => {
    const issues = document.getElementById('issues');
    const issuesList = document.createElement('ul');
    json.forEach((i) => {
      const issueLi = document.createElement('li');
      issueLi.textContent = i.title;
      issuesList.appendChild(issueLi)
    });
    issues.appendChild(issuesList);
  });
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
