  const token = 'e1c3668f22a2804516855f7b33bc0920b1a28e48';

function getIssues() {
  const repo = 'jenhaddock/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
    Authorization: `token ${token}`
  }})
  .then(resp => resp.json())
  .then(json => showIssues(json));
}

function createIssue() {
  const repo = 'jenhaddock/javascript-fetch-lab'
  const postData = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
   };
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
    Authorization: `token ${token}`
  }}).then(res => res.json()).then(data => getIssues())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
    Authorization: `token ${token}`
  }}).then(res => res.json()).then(data => showForkedRepo(data))
}

function showForkedRepo(){
  $("#results").append(`<p><a href="${res.html_url}">${res.html_url}</a></p>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
