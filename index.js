function getIssues() {
  fetch('https://api.github.com/repos/americanmouths/javascript-fetch-lab/issues')
  .then(response => response.json()).then(json => showIssues(json))
 }

function showIssues(json) {
  let issues = ''
  for(let i = 0; i < json.length; i++){
    const issue = `<p>Title: ${json[i].title} Body: ${json[i].body}</p><br/>`
    issues += issue
  }
$('#issues').html(issues)
 }

function createIssue() {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const issue = {
    title: title,
    body: body
  }

  const url = 'https://api.github.com/repos/americanmouths/javascript-fetch-lab/issues'

  fetch(url, {
    method: 'post',
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => getIssues())
}

function showResults(json) {
  let link = `<a href="${json.html_url}">Repository Link</a>`
	$('#results').html(link);
}

function forkRepo() {
   const repo = 'learn-co-curriculum/javascript-fetch-lab/forks'
   const url = 'https://api.github.com/repos/' + repo
   //use fetch to fork it!
  fetch(url, {
  method: 'post',
	headers: {
		Authorization: `token ${getToken()}`
	}
}).then(res => res.json()).then(json => showResults(json))
 }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
