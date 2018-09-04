function getIssues() {
  fetch('https://api.github.com/repos/rjspitkovsky/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  let issuesDiv = document.getElementById('issues');
  let issuesList = '<ul>' + json.map(issue => {
    return(`
    <li>
      <p>${issue.title}</p>
      <p>${issue.body}</p>
    </li>
    `)
  }).join('') + '</ul>';
  issuesDiv.innerHTML = issuesList;
}

function createIssue() {
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  let postData = {
    title: title,
    body: body
  }
  fetch('https://api.github.com/repos/rjspitkovsky/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => getIssues())

}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href='${json.html_url}'>Repo</a>`;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
 method: 'post',
 headers: {
   Authorization: `token ${getToken()}`
 }
}).then(res => res.json())
 .then(json => showResults(json));
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
