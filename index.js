function getIssues() {
  fetch('https://api.github.com/repos/jessiehuff/javascript-fetch-lab/issues')
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function showIssues(json) {
  console.log(json); 
}

function createIssue() {
  const title = document.getElementById("title").value 
  const body = document.getElementById("body").value 
  const issue = {
    title: title, 
    body: body
  }
  const url = 'https://api.github.com/repos/jessiehuff/javascript-fetch-lab/issues'

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
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = 'https://api.github.com/repos/' + repo 
  fetch(url, {
    method: 'post', 
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
