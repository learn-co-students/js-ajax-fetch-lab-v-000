function getIssues() {
  //GET /user/issues
  const token = getToken();
  //POST /repos/:owner/:repo/issues how to create an issue
  fetch('https://api.github.com/repos/ktamoguis/javascript-fetch-lab/issues', {
    method: 'get',
    //body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
  debugger;
}

function showIssues(json) {
}

function createIssue() {
  const bodyValue = document.getElementById('body').value;
  const token = getToken();
  //POST /repos/:owner/:repo/issues how to create an issue
  fetch('https://api.github.com/repos/ktamoguis/javascript-fetch-lab/issues', {
    method: 'post',
    body: bodyValue,
    //body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
  debugger;

}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();
  //use fetch to fork it!
  //POST /repos/:owner/:repo/forks  how to fork
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    //body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '';
  return token;
  //return ''
}
