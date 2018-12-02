function getToken() {
  const token = '76e4bcd76b91f6d3372dd2c5e71e9177a6573b2a'
  return token;
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => console.log(res))
  //use fetch to fork it!
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

