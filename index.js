function getIssues() {
	// GET /repos/:owner/:repo/issues
	const postData = {
	  body: ''
	};
  const repo = 'emhopkins/javascript-fetch-lab'
	fetch('https://api.github.com/repos/' + repo + '/issues', {
	  method: 'GET',
	  body: JSON.stringify(postData),
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
	}).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
	console.log(json)
	$("#issues")
		.append(json.body);
}

function createIssue() {
	// POST /repos/:owner/:repo/issues

	const postData = {
	  title: document.getElementById('title').value,
	  body: document.getElementById('body').value
	};
  const repo = 'emhopkins/javascript-fetch-lab'
	fetch('https://api.github.com/repos/' + repo + '/issues', {
	  method: 'POST',
	  body: JSON.stringify(postData),
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
	}).then(res => res.json()).then(json => showIssues(json));
}

function showResults(json) {
}

function forkRepo() {
// POST /repos/:owner/:repo/forks
	const postData = {
	  body: ''
	};
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
	fetch('https://api.github.com/repos/' + repo + '/forks', {
	  method: 'POST',
	  body: JSON.stringify(postData),
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
	}).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
	console.log(json)
	$("#results")
		.append("<a href=" + json.html_url + ">Forked Repo</a>");
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
