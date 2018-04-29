function getIssues() {
	const repo = 'jordaninthewind/javascript-fetch-lab';
	const issues = fetch(`https://api.github.com/repos/${repo}/issues`, {
		method: 'get',
		headers: {
			Authorization: `token ${getToken()}`
		}
		}).then(res => res.json())
		  .then(json => showIssues(json));
}

function showIssues(json) {
	const returnIssues = `<ul>${json.map(r => { return new Issue(r).template() })}</ul>`
	// debugger;
	$('#issues').html(returnIssues);
}

function createIssue() {
	const issueTitle = document.getElementById("title").value;//$('#title').val();
	const issueBody = document.getElementById("body").value;//$('#body').val();
	const repo = 'jordaninthewind/javascript-fetch-lab';
	const token = getToken();
	const issueData = {title: issueTitle, body: issueBody};

	fetch(`https://api.github.com/repos/${repo}/issues`, {
		method: 'post',
		body: JSON.stringify(issueData),
  		headers: {
    		Authorization: `token ${token}`
			}		
		}).then(res => res.json()).then(json => getIssues());
}

function showResults(json) {
	const repoInfo = `<br><p>${json.owner.login}</p>      
					  <p>${json.full_name}</p>
					  <p>${json.created_at}</p>
					  <p><a href="${json.html_url}">Repository</a></p>`

	$('#results').html(repoInfo);
}

// POST /repos/:owner/:repo/forks -- to fork repo
function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();

	fetch(`https://api.github.com/repos/${repo}/forks`, {
		method: 'post',
  		headers: {
    		Authorization: `token ${token}`
			}
		}).then(res => res.json()).then(json => showResults(json));
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}


function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

Issue.prototype.template = function(){
   var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
};