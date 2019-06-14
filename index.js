const baseURL = 'https://api.github.com';
const user = 'brennanmrose ';
const token = '';

function getToken() {
	fetch('https://api.github.com/brennanmrose/repos', {
		headers: {
			Authorization: `token ${token}`,
			mode:'no-cors'
		}
	})
		.then(res => res.json())
		.then(json => console.log(json));
	  // return '';
}

function forkRepo() {
  const repo = 'https://github.com/learn-co-curriculum/js-ajax-fetch-lab';
  fetch(repo, { Authorization: `token ${token}`, mode:'no-cors' })
  	.then(response => response.json())
  	.then(json => console.log(json));
}

function showResults(json) {

}
  //use this function to display the results from forking via the API

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}


