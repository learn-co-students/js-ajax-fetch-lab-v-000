function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let resultsHtml = `<a href='${json.html_url}'>See for of ${json.name}</a>`
  document.getElementById('results').innerHTML = resultsHtml;
}

function createIssue() {
  //POST /repos/:owner/:repo/issues
  //use this function to create an issue based on the values input in index.html
  const repo = `danschoch/js-ajax-fetch-lab`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'danschoch/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  let issuesHtml = json.map(issue => {
    `<li>Issue ${issue.number} - <a href='${issue.url}'>${issue.title}</a> - Status: ${issue.state}</li>`
  }).join('');
  
  document.getElementById('issues').innerHTML = '<ul>' + issuesHtml + '</ul>' ;
}
