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
  const repo = 'cpdundon/js-ajax-fetch-lab';
	//const repoUrl = document.getElementById('repo_url').href;
	const title =  document.getElementById('title').value;
	const body = document.getElementById('body').value;

	const splitUrl = repo.split('/');
	let postUrl = splitUrl[splitUrl.length - 2] + "/" + splitUrl[splitUrl.length - 1];
	postUrl = 'https://api.github.com/repos/' + postUrl + '/issues/'; 

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
	).then(getIssues(postUrl));
}

function getIssues(getUrl) {
  //once an issue is submitted, fetch all open issues to see the issues you are creating

	const token = getToken();
	//wait(2000); // Wait 2 seconds for the data to settle at GitHub.	

	fetch(
		getUrl,
		{
			method: 'GET',
			headers: {
				Authorization: `token ${token}`
			}
		}
	).then(res => res.json() 
	).then(json => printIssues(json, getUrl));
}

function printIssues(json, getUrl) {
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
