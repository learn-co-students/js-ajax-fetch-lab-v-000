function getIssues(results) {
	fetch(`https://api.github.com/repos//javascript-fetch-lab/issues`).
	then (resp => {
		resp.json().then(results => {
			for (let i = 0; i < results.length; i++){
				displayIssue(new Issue(results[i]));
			}
		})
	})
}

function displayIssue(issue) {
 return `<h2>Title: <a href="${this.url}"> ${this.title} </a></h2><br>
 <h4> Body: ${this.body}</h4>`
}

function createIssue() {
	const issueTitle = document.getElementById('title').value
	const issueBody = document.getElementById('body').value
	const postData = {title:issueTitle, body:issueBody}
	fetch (`https://api.github.com/repos/codedad70/javascript-fetch-lab/issues`,{
		method: 'post',
		headers: {
			'Authorization': `token ${getToken()}`
		},
		body: JSON.stringify(postData)
	}).then(resp => getIssues())
};

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method:'post',
  	headers: {
  		'Authorization': `token${getToken()}`
  	}
  }).then (resp => {
		this.url = repo.url;
		return `<h3>Forked!</h3>
		<a href="${this.url}"> ${this.url}</a>`
  });
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}


