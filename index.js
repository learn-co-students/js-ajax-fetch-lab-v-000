


 
// fetch('https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => console.log(res));

function getIssues() {
	fetch("https://api.github.com/repos/nptravis/javascript-fetch-lab/issues", {
			headers: {
				Authorization: `token ${token}`
			}
		}).then(res => res.json()).
  then(json => showIssues(json));
}

function showIssues(json) {
	$("#issues").html("<ul>");
		json.forEach(function(el){
			$("#issues").append(`<li>${el.title} - ${el.body}</li>`);
	});
		$("#issues").append("</ul>");
	
}

function createIssue() {
	const postData = {
  	title: document.getElementById('title').value,
  	body: document.getElementById('body').value
	};

	fetch("https://api.github.com/repos/nptravis/javascript-fetch-lab/issues", {
		method: "post",
		body: JSON.stringify(postData),
		headers: {
			Authorization: `token ${token}`
		}
	}).then(res => res.json()).then(() => getIssues());
	
}

function showResults(json) {
	$("#results").html(`<a href="${json.html_url}">${json.html_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${token}`
  	} 
  }).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
  // return token;
}
