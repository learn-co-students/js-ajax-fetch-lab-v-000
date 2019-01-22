function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  //return '8654349f7a3a3865d4f35250139d3421162b8888';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = getToken();
  //use fetch to fork it!
  fetch('http://api.github.com/repos/' + repo + '/forks', {
  method: 'POST',
  headers: { Authorization: `token ${token}`}
	})
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  debugger;
  $('#results').html(json);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = '/js-ajax-fetch-lab';
  const token = getToken();
  const postData = { body: document.getElementById("body").value, title: document.getElementById("title").value};

  fetch(repo + '/issues', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: { Authorization: `token ${token}`}
	})
  .then(res => res.json())
  .then(json => showResults(json)); 
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = '/js-ajax-fetch-lab';
  const token = getToken();

  fetch(repo + '/issues')
  .then(res => res.json())
  .then(json => showResults(json)); 
}
