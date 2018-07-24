const repo = 'learn-co-curriculum/javascript-fetch-lab'

function getIssues() {
  let repo = 'aspenjames/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`).
    then(result => result.json()).
    then(json => showIssues(json));
}

function showIssues(json) {
  let issues = json.map(issue => {
    return `<div>
      <p><a href="${issue.user.html_url}">${issue.user.login}</a> -
      <a href="${issue.html_url}">${issue.title}</a></p>
      <p>${issue.body}
    </div>`
  }).join('');

  $("#issues").html(issues);
}

function createIssue() {
  let issueData = {
    title: document.getElementById("title").value,
    body:  document.getElementById("body").value
  };
  fetch(`https://api.github.com/repos/skalum/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => getIssues());
}

function forkRepo() {
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
