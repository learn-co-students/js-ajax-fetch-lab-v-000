function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
 //  const token = 'INSERT_TOKEN_HERE';
 
 //  fetch('https://api.github.com/users/aellonk/repos', {
 //  headers: {
 //    Authorization: `token ${token}`
 //  }
	// })
 //  .then(res => res.json());
 //  return token;
  
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = 'https://api.github.com/repos/' + repo + '/forks';
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
.then(res => res.json()).then(res => showResults(res));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const repo = `<a href="${json.html_url}">Repository</a>`;
  document.getElementById('results').innerHTML = repo;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = '/js-ajax-fetch-lab';
  const issueData = {
  	title: document.getElementById('title').value,
 	body: document.getElementById('body').value
	};
  const issueURL = 'https://api.github.com/repos/aellonk' + repo + '/issues';
  fetch(issueURL, {
  	method: 'POST',
  	body: JSON.stringify(issueData),
  	headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(res => getIssues(res));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const issuesUrl = 'https://api.github.com/repos/aellonk/js-ajax-fetch-lab/issues'
  fetch(issuesUrl, {
  	headers: {
      Authorization: `token ${getToken()}`
    }
	})
	.then(res => res.json())
	 .then(json => displayIssues(json));
}

function displayIssues(data) {
  const issuesList = `<ul>${data
    .map(
      issue => `<li>${issue.title} - created by: ${issue.user.login} : ${issue.body}</li>`
    ).join('')}</ul>`
  document.getElementById('issues').innerHTML = issuesList;
}