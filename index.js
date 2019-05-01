
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '7b1bd4a44f0bffc80f771dc608c47023e96ff32c';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${getToken}`
    }
  })
    .then(res => res.json())
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
