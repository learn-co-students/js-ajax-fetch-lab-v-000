const token = '';
 

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
  	`https://api.github.com/repos/${repo}/forks`,
	{
	  method: 'POST',
	  headers: {
	  	Authorization: `token ${token}`
	  }
	 }).then(res => 
	  res.json()).
	  then(data => showResults(data)
  );
}

function showResults(json) {
	const url = json.html_url
	const linkText  = `<a href="${url}" target="_blank">>>View Repo</a>`
	document.getElementById('results').innerHTML = linkText
}

function createIssue() {
	const title = document.getElementById('title').value
	const body = document.getElementById('body').value
	const issueBody = {
		title: title,
		body: body
	}
	fetch(
		'https://api.github.com/repos/arianaberger/js-ajax-fetch-lab/issues',
		{
			method: 'POST',
			body: JSON.stringify(issueBody),
			headers: {
				Authorization: `token ${token}`
			}
		}
	).then(res => res.json()).then(data => getIssues())
}

function getIssues() {
	const issues = fetch(
		'https://api.github.com/repos/arianaberger/js-ajax-fetch-lab/issues',
		{
			method: 'GET',
			headers: {
				Authorization: `token ${token}`
			}
		}
	).then(res => res.json()).then(data => showIssues(data))
}

function showIssues(data){
	const issueInfo = data.map( i => 
		`<li>${i.title}</li>
		<li>${i.body}</li>`).join('');
	const addHTML = '<ul>' + issueInfo + '</ul>'
	document.getElementById('issues').innerHTML = addHTML
}
