function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';

  //const token = 'YOUR_TOKEN_HERE';

  //fetch('https://api.github.com/user/repos', {
  //    headers: {
  //      Authorization: `token ${token}`
  //    }
  //  })
  //  .then(res => res.json())
  //  .then(json => console.log(json));
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab')
    .then(resp => resp.json())
    .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
