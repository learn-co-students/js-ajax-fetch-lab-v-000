// const token = '959bb5d5bd7704a5f216f3f07e0551953d8e3e4d';
const token = "magicalether";

function getIssues() {
  // GET /repos/:owner/:repo/issues
  fetch('/javascript-fetch-lab\/issues/', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  let issueData = {
    body: 'test body'
  };
  let issue_repo = '/javascript-fetch-lab\/issues/';
  fetch(issue_repo, {
    method: /post/,
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}


function showResults(json) {
}

function forkRepo() {
  const postData = {
    body: 'Great stuff'
  };
  //POST /repos/:owner/:repo/forks
  const repo = '/api.github.com\/repos\/learn-co-curriculum\/javascript-fetch-lab/';
  //use fetch to fork it!
  fetch(repo, {
    method: /post/,
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(resp => resp.json())
//   .then(json => console.log(json));
