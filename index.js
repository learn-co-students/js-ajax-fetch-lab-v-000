

const repo = 'learn-co-curriculum/javascript-fetch-lab'  
const issues = `https://api.github.com/repos/tsyaeger/javascript-fetch-lab/issues`
const forks = `https://api.github.com/repos/${repo}/forks`

function getIssues() {
	fetch(issues, {
		method: "get",
		body: document.getElementById('body').value,
		title: document.getElementById('title').value,
		headers: {
			Authorization: 	`token ${getToken()}`,
		}
	}).then(response => response.json())
		.then(showIssues)
}

function showIssues(res) {
  	$("#issues").html(res);
}

function createIssue() {
		fetch(issues, {
		body: document.getElementById('body').value,
		title: document.getElementById('title').value,
		method: "post",
		headers: {
			Authorization: 	`token ${getToken()}`,
		}
	}).then(response => response.json())
		.then(showIssues)
}

function showResults(json) {
	$("#results").html(`<a href="${json.html_url}">${json.full_name}</a>`);
}

function forkRepo() {
  //use fetch to fork it!
  	fetch(forks,   {
    	method: 'post',
    	headers: {
      	Authorization: `token ${getToken()}`
    	}
  	}).then(response => response)
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  	return ''
}







// function getIssues() {
//   fetch(`https://api.github.com/repos/tsyaeger/js-ajax-fetch-lab-v-000/issues`)
//     .then(res => res.json())
//     .then(showIssues);
// }














