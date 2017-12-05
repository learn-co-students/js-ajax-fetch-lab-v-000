function getIssues() {
	fetch('https://github.com/jtb1137/javascript-fetch-lab/issues', {
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => res.json()).then(showIssues);
}

function showIssues(json) {
	$('#issues').html("<h2>${json.title}</h2> <br><p>${json.body}</p>")
}

function createIssue() {
	const issueTitle = document.getElementById("title").value;
	const issueBody = document.getElementById("body").value;
	const issue = {title: issueTitle, body: issueBody};
	fetch('https://github.com/jtb1137/javascript-fetch-lab/issues', {
		method: 'post',
		headers:  {
			Authorization: `token ${getToken()}`
		},
		body: JSON.stringify(issue)
	}).then(res => res.json()).then(getIssues);
}

function showResults(json) {
	$('#results').html(`<a href="${json.html_url}">${json.name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
