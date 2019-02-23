const baseURL = 'https://api.github.com';
const user = 'BekahHW';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
// Fork this repository in the forkRepo function. Read more about forking in the GitHub Forks API documentation. If done correctly, the response, once converted to JSON, should contain information about your personal fork of the repo. Pass this JSON data into showResults
function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/forks`,{
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
 .then(response => response.json())
 .then(json => showResults(json));
}

// In showResults, write code to display a link to the forked repo url (json.html_url). Append this link to the results div.
function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/issues`,{
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body:JSON.stringify({title:title, body:body})
  })
  .then(res => res.json())
      .then(json => getIssues());

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  // After the issue is created, fetch and display a list of all issues associated with your repository on the page. Append them to the issues div.
  const repo = `${user}/js-ajax-fetch-lab`;
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/issues`,{
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
  })
  .then(res => res.json())
      .then(json => console.log(json));
}
