const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'e0623a86e191636b5233338e97400e21f910ddf8'
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    headers: {
      Authorization: getToken()
    }
  })
  .then(resp => resp.json())
  .then(json => console.log(json[0].html_url));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  forkRepo().forEach(element => {
    console.log(element);
  });
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
