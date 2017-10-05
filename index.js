const token = getToken();

function getIssues() {
	const fork = `debjohnson33/javascript-fetch-lab`
    fetch(`https://api.github.com/repos/${fork}/issues`, {
       method: 'get',
       headers: {
         Authorization: `token ${token}`
       }
     }).then(resp => resp.json()).then(data => showIssues(data))
}

function showIssues(json) {
	let div = document.getElementById("issues")
	for(var i=0; i < json.length; i++) {
		$("#issues").append(`<li>${json[i].title}</li>`)
	}
}

function createIssue() {
	let title = document.getElementById("title").value
	let body = document.getElementById("body").value
	let issue = {tite: title, body: body}
	fetch(`https://api.github.com/repos/debjohnson33/javascript-fetch-lab/issues`, {
     method: 'post',
     headers: {
       'Authorization': `token ${token}`
     },
     body: JSON.stringify(issue)
   }).then(resp => getIssues());
 
  }		  

function showResults(json) {
	$('#results').append(`<h3>Ford:</h3><a href="${json.html_url}"> ${json.html_url}</a> - ${json.name}`)
}

function forkRepo() {
   const repo = 'learn-co-curriculum/javascript-fetch-lab'
   fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
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
