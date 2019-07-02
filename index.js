const baseURL = 'https://api.github.com';
const user = 'sjwakeman';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', { //changed url
  method: 'POST',
  headers: {
    Authorization: `token ${getToken()}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))

}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  fetch('https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues', { //changed url
  method: 'POST',
  headers: {
    Authorization: `token ${getToken()}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))

}


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
