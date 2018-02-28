// const token = '824082b02e4cf440e7352c08d3ae269fd8f1f83c';
//
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));
//
// const token = 'YOUR_TOKEN_HERE';
// const postData = {
//   body: 'Great stuff'
// };
//
// fetch('https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => console.log(res));
function getIssues() {
  fetch("https://api.github.com/repos/travislavery/javascript-fetch-lab/issues", {
	   headers: {
		   Authorization: `token ${getToken()}`
	   }
	 }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let issues =
    json.map(o => {
      `<p>Title: ${o.title}</p><p>Body: ${o.body}</p><br/>`
    }).join();

	$('#issues').html(issues)
}

function createIssue() {
  let details = {
		title: document.getElementById('title').value,
		body: document.getElementById('body').value
	}

	fetch(`https://api.github.com/repos/travislavery/javascript-fetch-lab/issues`,{
  	method: /post/,
  	body: JSON.stringify(details),
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
	}).then(res => getIssues())
}

function showResults(json) {
  let link = `<a href="${json.url}">Repository Link</a>`;

	$('#results').html(link)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}`, {
   method: /post/,
   headers: {
     Authorization: `token ${getToken()}`
   }
   }).then(res => showResults(res))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
