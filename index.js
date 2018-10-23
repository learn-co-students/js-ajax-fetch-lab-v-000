function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

//POST /repos/:owner/:repo/forks
function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById("results").innerHTML =`<a href="${json.html_url}">${json.html_url}</a>`;
}

// POST /repos/:owner/:repo/issues
function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let issueTitle = document.getElementById("title").value
  let issueBody = document.getElementById("body").value
  fetch(`https://api.github.com/repos/sgibson47/js-ajax-fetch-lab/issues`,{
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`},
    body: { title: issueTitle, body: issueBody}
  })
    .then(res => res.json())
    .then(json => getIssues());
}


// GET /repos/:owner/:repo/issues
function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/sgibson47/js-ajax-fetch-lab/issues`,{
    headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(json => console.log(json));
}
