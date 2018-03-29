function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'post',
	headers: {
		Authorization: `token ${getToken()}`
	}
	}).then(res => showResults(res))
}

function showResults(json) {
	let link = `<a href="${json.url}">${json.url}</a>`
	$('#results').append(link)
  console.log(json)
}

function createIssue() {
	const issueData = {
		title: document.getElementById('title').value,
		body: document.getElementById('body').value
	}
	fetch('https://api.github.com/repos/brittmmendez/javascript-fetch-lab/issues', {
  	method: 'post',
  	body: JSON.stringify(issueData),
	headers: {
		Authorization: `token ${getToken()}`
	}
	}).then(res => getIssues())
}

function getIssues() {
	fetch('https://api.github.com/repos/brittmmendez/javascript-fetch-lab/issues', {
	headers: {
		Authorization: `token ${getToken()}`
	}
	}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
	let issues = ''
	for(let i = 0; i < json.length; i++){
		const issue = `<p>Title: ${json[i].title} Body: ${json[i].body}</p><br/>`
		issues += issue
	}
	$('#issues').html(issues)
}
