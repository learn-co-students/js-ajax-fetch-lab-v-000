let resultsDiv = document.getElementById('results');
let issuesDiv = document.getElementById('issues');

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, 
  // POST /repos/:owner/:repo/forks
  	{
  		method: 'POST',
  		headers: {
  			Authorization: `token ${getToken()}`
  		}
  	}
  ).then(res => res.json()).then(json => showResults(json))
  // ).then(res => res.json()).then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const forkLink = json.html_url
  resultsDiv.innerHTML = `<a href="${forkLink}">JS AJAX Fetch Lab</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value
  const issue = {title: title, body: body}

  fetch(`https://api.github.com/repos/great-divide/js-ajax-fetch-lab/issues`, 
	  {
	  	method: 'POST',
	  	headers: {
	  		Authorization: `token ${getToken()}`
	  	},
	  	body: JSON.stringify(issue)
	  }
  ).then(res => res.json())
  .then(json => getIssues())

  title.innerHTML = "";
  body.innerHTML= "";
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('https://api.github.com/repos/great-divide/js-ajax-fetch-lab/issues',
	  {
	  	method: 'GET',
	  	headers: {
	  		Authorization: `token ${getToken()}`
	  	}
	  }
  ).then(res => res.json())
  .then(data => {data.forEach(issue => 
  	{
	  	issuesDiv.innerHTML += 
	  	`<ul>	
	  		<li>Issue Title: ${issue.title}</li>
	  		<li>Issue Text: ${issue.body}</li>
			</ul>`
	  }
  )})
}
