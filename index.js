const baseURL = 'https://api.github.com';
const user = 'infopro94';

function getToken() {
   return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
  	method: 'POST',
  	headers: {
  		Authorization: `token${getToken()}`
  	}
  })
  	.then(res => res.json())
  	.then(json => showResults(json));
}

function getIssues() {
	fetch('/js-ajax-fetch-lab\/issues/', {
		method: 'get',
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => res.json())
	.then(json => showIssues());
 }

function showResults(json) {
	document.getElementById('results').innerHTML
	 = `<a href=${json.html_url}${json.html_url}</a>`;
}

function showIssues(json) {
	let issues = '<ul>' + json.map(issue => {
		return (`<li><a href="${issue.url}"${issue.title}</a></li>`)
	}).join('') + '</ul>'
	document.getElementById('issues').innerHTML = issues;
}

function createIssue() {
	const title = document.getElementById('title').value;
	const body = document.getElementById('body').value;
	const post = {title: title, body: body};
	fetch('/js-ajax-fetch-lab\/issues/', {
		method: 'POST',
		body: JSON.stringify(post),
		headers: {
			Authorization: `token ${getToken()}`
		},
		body: JSON.stringify(post)
	}).then(getIssues());
}





