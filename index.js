const baseURL = 'https://api.github.com';
const user = 'ktochow1';

const token = '022c156de5b94559b16df60a94096923ebcc0d8e';

fetch(`https://api.github.com/${user}/repos`, {headers: {
  Authorization: `token ${token}`
}
}).then(res => res.json()).then(json => console.log(json));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

// baseURL/repos/:owner/:repo/forks


function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`
  fetch(url, {method: 'POST', headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {

  //use this function to display the results from forking via the API
}

function createIssue() {
  const myRepo = 'ktochow1/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${myRepo}/issues`;

  const postData = {
    title: document.querySelector('#title').value,
    body: document.querySelector('#body').value
    }

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(json => getIssues());
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  fetch(`https://api.github.com/repos/ktochow1/js-ajax-fetch-lab/issues`,
  {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function showIssues(body){
  console.log(body);
  document.getElementById("issues").append(`<h2>${body.title}</h2> <br><p>${body.body}</p>`)
}
