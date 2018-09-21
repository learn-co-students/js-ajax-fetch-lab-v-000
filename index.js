const rootURL = 'https://api.github.com';
const userLogin = 'jenna424';
const repoName = 'js-ajax-fetch-lab';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab'; // stores replacement for :owner/:repo in URL below
  // Create a fork - POST /repos/:owner/:repo/forks
  const url = `${rootURL}/repos/${repo}/forks`;
  //use fetch to fork it!
  fetch(url, {
    method: 'POST', // since we're CREATING a fork
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json()) // telling JS to ask the network response to be turned into JSON
    .then(json => showResults(json)) // passing JSON response into showResults() function
}

function showResults(json) {
  $('#results').append(`<p><strong>${json.name} repo was successfully forked</strong>:</p><a href=${json.html_url}>${json.html_url}</a>`)
  // Display the results from forking via the API
  // Display a link to the forked repo url (json.html_url).
  // Append this link to the <div id="results"></div>
}

function createIssue() {
  // Create an issue based on the values input in index.html
  // Create an issue - POST /repos/:owner/:repo/issues
  const url = `${rootURL}/repos/${userLogin}/${repoName}/issues`;
  const title = document.getElementById('title').value; // stores string value entered in <input type="text" id="title">
  const body = document.getElementById('body').value; // stores string value entered in <input type="text" id="body">
  const postIssueData = {title: title, body: body};
  fetch(url, {
    method: 'POST', // since we're creating an issue
    body: JSON.stringify(postIssueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => getIssues())
}

function getIssues() {
  // After the issue is created, fetch and display a list of all issues associated with your repository on the page. Append them to the `issues` div.
  // List issues on a repo - GET /repos/:owner/:repo/issues
  const issuesURL = `${rootURL}/repos/${userLogin}/${repoName}/issues`
  fetch(issuesURL, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => displayIssues(json)) // json is an array of issue objects
}

function displayIssues(json) {
  const src = $('#issues-template').html(); // src stores string HTML from '<ul> through </ul>'
  //const src = document.getElementById('issues-template').innerHTML;
  const template = Handlebars.compile(src);
  // The src string is passed to Handlebars.compile(), which compiles the markup and {{}} delimiters
  // as part of a function stored in template, which can be called with a context (argument)
  $('#issues').append(template(json))
}
