function getIssues() {
  fetch(`https://api.github.com/repos/dande313/javascript-fetch-lab/issues`,{
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showIssues(json));
}

function showIssues(json) {
}

function createIssue() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  const postData = {title: title, body : body};
	const repo = 'dande313/javascript-fetch-lab';
	fetch(`https://api.github.com/repos/${repo}/issues`, {
	  method: 'post',
	  body: JSON.stringify(postData),
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
	}).then(res => console.log(res));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`,{
  		method: 'post',
  		headers: {
  			Authorization: `token ${getToken()}`
  		}
  }).then(res => res.json())
	.then(json => showResults(json));
}


function getToken() {
  return ''
}
