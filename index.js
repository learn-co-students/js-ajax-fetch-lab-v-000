const token = 'token';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}


function forkRepo() {
  const token = getToken();
  //use fetch to fork it!
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json));
};


function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementbyId('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
