const baseUrl = 'https://api.github.com/';
const githubOwner = '';
const forkUrl = `${githubOwner}/javascript-fetch-lab`;
const repoTitle = 'javascript-fetch-lab';
function getIssues() {
	fetch(`${baseUrl}repos/${forkUrl}/issues`).then(res => {
		res.json().then(json => {
			for(issue of json) {
				showIssues(issue);
			}
		});
	})
}

function showIssues(json) {
	$('#issues').append(`<ul><h4>${json.title}</h4><li><p>${json.body}</p><p>Created at: ${json.created_at}</p><p>Status: ${json.state}</p></li></ul>`);
}

function createIssue() {
	const issueTitle = document.getElementById('title').value;
	const issueText = document.getElementById('body').value;
	const owner = githubOwner;
	fetch(`${baseUrl}repos/${forkUrl}/issues`, {
		method: 'post',
		headers: {
			Authorization: `token ${getToken()}`
		},
		body: JSON.stringify({ title: issueTitle, body: issueText })
	}).then(res => getIssues());
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const owner = githubOwner;
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  }).then(res => {
  	let repo = res;
  	showForkedRepo(repo);
  });
}

function showForkedRepo(repo) {
	$('#results').html(`<h2>Successfully Forked!</h2><a href="${repo.url}">${repo.url}</a>`);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
