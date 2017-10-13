function getIssues() {
  fetch(`https://api.github.com/repos/samsonyuwono/javascript-fetch-lab/issues`,{
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
  // let title = $("#title").value;
  // let body = $("#body").value;
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  const postData = {title: title, body : body};
	const repo = 'bryanhou1/javascript-fetch-lab';
	fetch(`https://api.github.com/repos/${repo}/issues`, {
	  method: 'post',
	  body: JSON.stringify(postData),
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
	}).then(res => console.log(res));
}

function showResults(json) {
	$('div#results').html(`<a href="${json.url}">get forks</a>`); 
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
	return '';
}

