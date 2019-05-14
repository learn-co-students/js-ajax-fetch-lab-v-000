const token = '';
const user = 'atxrenegade'
const repo = `learn-co-curriculum/js-ajax-fetch-lab`;

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
	console.log(token)
		return `${token}`;
}

function forkRepo() {
	//POST /repos/:owner/:repo/forks
	const url = `https://api.github.com/repos/${user}/${repo}/forks`
	console.log(url)
  fetch(url,
		{
	  	method: 'POST',
			headers: {
	  		Authorization: `token ${getToken()}`
		}
	})
	.then(response => response.json())
	.then(json => showResults(json));
}


function showResults(json) {
	console.log(json)
  //use this function to display the results from forking via the API
  const link = json.html_url
   document.getElementById('results').innerHTML = `<a href=${link}> ${link} </a>`;
}

function createIssue() {
	const issueTitle = document.getElementById('title').value
	const issueBody = document.getElementById('body').value
	console.log(issueTitle, issueBody)

	url = `https://api.github.com/repos/${user}/${repo}/issues`
	const issueData = {
		"title": issueTitle,
		"body": issueBody
	}

	fetch(url, {
		method: 'POST',
		headers: {
			Authorization: `token ${getToken()}`
		},
		body: JSON.stringify(issueData)
	})
	getIssues();
}


function getIssues() {
	const issueTitle = document.getElementById('title').value
	const issueBody = document.getElementById('body').value
	console.log(issueTitle, issueBody)

	url = `https://api.github.com/repos/${user}/${repo}/issues`

	fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `token ${getToken()}`
			}
	}).then(response => response.json())
	.then(json => showIssues(json));
}

function showIssues(resp) {
	const issueList = resp.map(
      issue =>
        issue.title + ' - ' + issue.body + '<br>'
    )
    .join('');
		document.getElementById('issues').innerHTML = issueList;
}
