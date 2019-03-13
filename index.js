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
			//organization: JSON.stringify(orgData),
			headers: {
				Authorization: `token ${token}`
			}
		}
	).then(res => res.json() 
	).then(json => showResults(json));
}

function showResults(json) {
  const forkResult = document.getElementById('results');
	const url = json.html_url;
	forkResult.innerHTML = '<a href="' + url + '" id="repo_url">Open Repo</a>';
}

function createIssue() {
	const title =  document.getElementById('title').value;
	const body = document.getElementById('body').value;

	const postUrl = 'https://api.github.com/repos/cpdundon/js-ajax-fetch-lab/issues/'; 
	const token = getToken();

	const issueData = {
		title: `${title}`,
		body: `${body}`
	};
	 
	fetch(
		postUrl,
		{
			method: 'POST',
			body: JSON.stringify(issueData),
			headers: {
				Authorization: `token ${token}`
			}
		}
	).then(res => res.json() 
	).then(getIssues());
}

function getIssues() {
	const getUrl = 'https://api.github.com/repos/cpdundon/js-ajax-fetch-lab/issues/'; 

	const token = getToken();

	fetch(
		getUrl,
		{
			method: 'GET',
			headers: {
				Authorization: `token ${token}`
			}
		}
	).then(res => res.json() 
	).then(json => printIssues(json));
}

function printIssues(json) {
	console.log(json);
	const issuesDiv = document.getElementById('issues');
	const issueList = `<ul>${json
    .map(i => '<li><a href="' + 'https://github.com/cpdundon/js-ajax-fetch-lab/issues' + '">' + i.title + '</a></li>')
    .join('')}</ul>`;
	issuesDiv.innerHTML = issueList;
}

function wait(ms){
   const start = new Date().getTime();
   let end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
