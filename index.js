function getIssues() {
  fetch('https://api.github.com/repos/aimeecarney/javascript-fetch-lab/issues', {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody }

  fetch('https://api.github.com/repos/aimeecarney/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => getIssues());
}

function showResults(json) {
  $('#results').html(`<a href=${json.html_url}>Repository</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
     method: 'post',
     headers: {
       Authorization: `token ${getToken()}`,
     },
   }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
