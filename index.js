function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '8839e036469067ba75d724e3b225bf47c58c1163 ';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token getToken()`
      }
    }  
  )
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

const token = "db7b6419cd70ad36bf3abfa55b1388f44ec991e0";
