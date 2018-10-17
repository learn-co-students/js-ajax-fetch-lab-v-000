function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '2dbcc248c96cc84a6fa1f02b63f79a9caf92ae0a';
  return '';
}

function forkRepo() {
  const repo = 'api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  //use fetch to fork it!
  fetch(repo,
  {
    method: 'POST',
    headers: {
      Authorization: 'token'
    }
  }
  )
}
//POST /repos/:owner/:repo/forks

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
