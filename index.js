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
.then(res => res.json());

}
//POST /repos/:owner/:repo/forks

//In showResults, write code to display a link to the forked repo url (json.html_url). Append this link to the results div.
function showResults(json) {
  //use this function to display the results from forking via the API
  const repoLink = (`${json.html_url}`).join('');
  document.getElementById('results').innerHTML = repoLink;
}


function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
