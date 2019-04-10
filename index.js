function getToken() {
  return "";
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
     }
   }
 ).then(response => response.json())
 .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  let body = document.getElementById('body').value
  let title = document.getElementById('title').value
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    body: body,
    title: title,
    headers: {
      Authorization: `token ${getToken}`
    }
  }).then(response => response.json());


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
