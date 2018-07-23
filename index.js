function getIssues() {
  console.log('get issues');
  fetch('https://api.github.com/repos/raiet13/javascript-fetch-lab/issues')
  .then(resp => resp.json())
  .then(json => console.log(showIssues(json)));

}

function showIssues(json) {
  console.log('show issues = ', json);
  document.getElementById('issues').innerHTML += json;
}

function createIssue() {
  console.log('create issue');
  
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  
  fetch('https://api.github.com/repos/raiet13/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => console.log(res));

}

function showResults(json) {
  console.log('show results = ', json);
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">Go to Forked Repo</a>`;
}

// ** NOTE : Kept getting a 404 not found for the lab so just used the tests and resources to get the tests to pass...
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  console.log('fork repo');

  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  console.log('get token');
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}