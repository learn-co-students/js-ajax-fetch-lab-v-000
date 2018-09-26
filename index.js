const token = '8b051c688662938d9f82506cd11e18305562d149'


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(response => response.json())
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById("results").innerHTML = `<a href="${json.html_url}" target="_blank">"${json.html_url}"</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
