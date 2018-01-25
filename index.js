function getIssues() {
	fetch('https://api.github.com/repos/streamedline/javascript-fetch-lab/issues', {
		header: {
			Authorization: `token ${getToken()}`
		}
	}).then(resp => resp.json()).then(json => showIssues(json));
}

function showIssues(json) {
	console.log(json)
	let html = '';
	Array.from(json).forEach(function(issue){
		html += `<h3>Issues List</h3> <p>Title: ${issue.title}<br>body: ${issue.body}</p><hr>`
	});
	$('#issues').html(html)
}

function createIssue() {
	const postData = {
		title: document.querySelector('#title').value,
  	body: document.querySelector('#body').value
	};

	fetch('https://api.github.com/repos/streamedline/javascript-fetch-lab/issues', {
		method: 'post',
		body: JSON.stringify(postData),
		headers: {
  		Authorization: `token ${getToken()}`
  	}
	}).then(resp => resp.json()).then(json => getIssues());
}

function showResults(json) {
	$('#results').html(`<h3>Results:</h3><a href=${json.clone_url}>${json.name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
  	method: 'post', 
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(resp => resp.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
