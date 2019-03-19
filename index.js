const baseURL = 'https://api.github.com'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${baseURL}/repos/${repo}/forks`, {
    method: 'POST',
  headers: {
    Authorization: `token ${getToken}`
   }
  })
  .then(res => console.log(res));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  fetch('json.html_url')
  .then(response => response.json())
  .then(json => console.log(json));
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = '/js-ajax-fetch-lab';
  const issue = { 
    body: 'test body'
  };
  
  fetch(`${repo}/issues`, 
  {
  method: 'POST',
  body: JSON.stringify(issue),
  
  headers: {
    Authorization: `token ${getToken}`
   }
  })
  .then(res => console.log(res));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = '/js-ajax-fetch-lab';

  fetch(`${repo}/issues`)
  .then(response => response.json())
  .then(json => console.log(json));
  
}
