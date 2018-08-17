function getIssues() {
	const repo = 'javascript-fetch-lab/issues'
	const myRepo = 'kanndide/js-ajax-fetch-lab-v-000/issues'
	fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
		    Authorization: `token ${getToken()}`
		  }
		}).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
	$('#issues').html(`${JSON.stringify(json)}`);
}

function createIssue() {
	const repo = 'javascript-fetch-lab/issues'
	const myRepo = 'kanndide/js-ajax-fetch-lab-v-000/issues'
	let postData = {
		title: document.getElementById('title').value,
		body: document.getElementById('body').value
	}
	fetch(`https://api.github.com/repos/${repo}`, {
		method: /post/,
		body: JSON.stringify(postData),
		headers: {
		    Authorization: `token ${getToken()}`
		  }
		}).then(getIssues())
};

function showResults(json) {
	$('#results').html(`<a href=${JSON.stringify(json.html_url)}> Repo URL</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const myRepo = 'kanndide/js-ajax-fetch-lab-v-000/forks'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}`, {
  	  method: /post/,
	  headers: {
	    Authorization: `token ${getToken()}`
	  }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '381ebe31584751353c97b5719ed542657b5f50d2'
  return ''
}
