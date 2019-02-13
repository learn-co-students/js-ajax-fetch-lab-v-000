function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/forks`;
  //use fetch to fork it!
  fetch(url, {
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
  document.getElementById('results').innerHTML = `<a href='${json.html_url}'>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'juangongora/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/issues`;
  const request = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(url, {
    method: 'POST',
    //The JSON.stringify() method converts a JavaScript object or value to a JSON string
    body: JSON.stringify(request),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'juangongora/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
}
