const base = 'https://api.github.com/repos/'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  // return `53eb994f9f0800d5b5fedada394c39e900b01fdb`;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(base + repo + '/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let results = document.getElementById('results')
  results.append(json.html_url)
}



function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch('https://api.github.com/repos/dlyons8/js-ajax-fetch-lab/issues', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  // debugger
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch('https://api.github.com/repos/dlyons8/js-ajax-fetch-lab/issues', {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => appender(json));

  function appender(string) {
    const issues = document.getElementById('issues');
    if (issues.querySelector('ul')){} else {issues.innerHTML = '<ul>'}
    for (const el of string) {
      issues.innerHTML += `<li>${el.title}</li>`;
    }
  }
}
