const user = 'bschrag620'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `https://api.github.com/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
	.then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
 document.getElementById('results').innerHTML = 
 	`<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
	const postData = {
 		title: document.getElementById('title').value,
 		body: document.getElementById('body').value
 	}

 	const url = `https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`;

 	fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
	const url = `https://api.github.com/repos/${user}/js-ajax-fetch-lab/issues`;

	fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `token ${getToken()}`
		}
	})
	.then(res => res.json())
	.then(json => console.log(json))
}
