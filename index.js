const username = '';

function getIssues() {
	//const repo = $("#results").text();

	fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`)
		.then(res => res.json())
		.then(json => showIssues(json));
}

function showIssues(issuesList) {
	$("#issues").html(`<ul>${issuesList.map(i => `<li><a href="${i.html_url}">${i.title}</a>
		<p>${i.body}</p></li>`).join('')}</ul>`)
}

function createIssue() {
	//const repo = $("#results").text();
	//const title = ${"#title"}.val();
	//const body = ${"#body"}.val();
	
	const title = document.getElementById("title").value;
	const body = document.getElementById("body").value;
	const issue = { title: title, body: body }

	fetch (`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`, {
		method: 'post',
		headers: {
			'Authorization': `token ${getToken()}`
		},
		body: JSON.stringify(issue)
	})

	getIssues();
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'post',
  	headers: {
  		'Authorization': `token ${getToken()}`
  	}
  }).then(res => res.json())
  .then(json => showForkedRepo(json));
  //use fetch to fork it!
}

function showForkedRepo(response) {
	$("#results").html(`<a href="${response.html_url}">${response.full_name}</a>`);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
