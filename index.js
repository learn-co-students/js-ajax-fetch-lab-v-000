function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

	const token = getToken();
	const orgData = {
		organization: 'cpdundon'
	};
	 
	fetch(
		'https://api.github.com/repos/' + repo + '/forks',
		{
			method: 'POST',
			organization: JSON.stringify(orgData),
			headers: {
				Authorization: `token ${token}`
			}
		}
	).then(res => showResults(res));
}

function showResults(json) {
  const forkResult = document.getElementById('results');
	console.log(json);
	forkResult.innerHTML = json.html_url;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
