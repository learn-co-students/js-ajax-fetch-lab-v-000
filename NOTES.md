const rootURL = 'https://api.github.com'
const userLogin = 'jenna424';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'aa361dc14a278dcd770492edcb22868955cb8a6d';
  //return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  // Create Fork - POST /repos/:owner/:repo/forks
  const urlToDataSource = `${rootURL}/repos/${repo}/forks`;
  //use fetch to fork it!
  fetch(urlToDataSource, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => showResults(json))
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
  //document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
  //use this function to display the results from forking via the API
}

//create a GitHub issue via API call - POST /repos/:owner/:repo/issues
function createIssue() { //use this function to create an issue based on the values input in index.html
  const ownerAndRepoString = `${userLogin}/js-ajax-fetch-lab`;
  const url = `${rootURL}/repos/${ownerAndRepoString}/issues`;
  const postIssueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postIssueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => getIssues(json));
}
// List Issues for a Repository GET /repos/:owner/:repo/issues

//function showRepositories(event, data) {
  //const repos = JSON.parse(this.responseText);
  //const src = document.getElementById('repository-template').innerHTML;
  //const template = Handlebars.compile(src);
  //const repoList = template(repos);
  //document.getElementById('repositories').innerHTML = repoList;
}

// List Issues on a Single Repository - GET /repos/:owner/:repo/issues
function getIssues(json) { // argument should be array of issue objects?
  const issuesURL = `${rootURL}/repos/${userLogin}/js-ajax-fetch-lab/issues`;
  fetch(issuesURL, {
    headers: {
      Authorization: `token ${getToken}`
    }
  })
    .then(resp => resp.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const src = $('#issues-template').html(); // document.getElementById('issues-template').innerHTML
  const template = Handlebars.compile(src); // compiling the markup and {{}} delimiters as part of a function, template, that can be called with a context (argument)
  const issuesList = template(json);
  $('#issues').append(issuesList);
}

//function getIssues() {
  //const ownerAndRepoString = `${gitHubUsername}/js-ajax-fetch-lab`;
  //const url = `${rootURL}/repos/${ownerAndRepoString}/issues`;

  //fetch(url, {
    //headers: {
      //Authorization: `token ${getToken()}`
    //}
  //})
    //.then(resp => resp.json())
    //.then(json => console.log
//}
  //once an issue is submitted, fetch all open issues to see the issues you are creating

  ---
  const rootURL = 'https://api.github.com';
  const userLogin = 'jenna424';
  const repoName = 'js-ajax-fetch-lab';

  function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    //return 'aa361dc14a278dcd770492edcb22868955cb8a6d';
    //return '';
  }

  function forkRepo() {
    const repo = 'learn-co-curriculum/js-ajax-fetch-lab'; // string is composed of owner username and repo name
    // Create a fork - POST /repos/:owner/:repo/forks
    const url = `${rootURL}/repos/${repo}/forks`
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(resp => resp.json())
      .then(json => showResults(json))
  }

  function showResults(json) {
    document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
  }

  // Create an issue - POST /repos/:owner/:repo/issues
  function createIssue() {
    const url = `${rootURL}/repos/${userLogin}/${repoName}/issues`
    const postIssueData = {
      title: document.getElementById('title').value
      body: document.getElementById('body').value
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(postIssueData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(resp => getIssues())
    //use this function to create an issue based on the values input in index.html
  }

  // List issues for a given repo - GET /repos/:owner/:repo/issues
  function getIssues(json) {
    const issuesURL = `${rootURL}/repos/${userLogin}/${repoName}/issues`;
    fetch(issuesURL, {
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(resp => resp.json())
      .then(showIssues(json))
    //once an issue is submitted, fetch all open issues to see the issues you are creating
  }

  function showIssues(json) {
    const src = document.getElementById('issues-template').innerHTML;
    const template = Handlebars.compile(src);
    document.getElementById('issues').append(template(json))
  }
