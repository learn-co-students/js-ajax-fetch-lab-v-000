 const token = '16cb1d63981e9dedc4fae03b9d28059092dc8a9a';
 const user = 'atxrenegade'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
	fetch('https://api.github.com/' + user + '/repos', {
		headers: {
			Authorization: `token ${token}`
		}
	})
		.then(response => response.json())
		return `${token}`;
}

function forkRepo() {
  	const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  	fetch(`https://api.github.com/repos/${repo}/forks`, {
	  	method: 'POST',
		headers: {
	  		Authorization: `token ${getToken()}`
		}
	})

  	.then(response => response.json())
  	.then(json => showResults(json))
}


function showResults(json) {
  //use this function to display the results from forking via the API
  const link = json.html_url
  const addToHTML = document.querySelector('div#results')
  addToHTML.innerHTML += ` ${link}`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
