function getIssues() {
  let repo = 'aspenjames/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`).
    then(result => result.json()).
    then(json => showIssues(json));
}

function showIssues(json) {
  let issues = json.map(issue => {
    return `<div>
      <h3><a href="${issue.user.html_url}">${issue.user.login}</a> - <a href="${issue.html_url}">${issue.title}</a></h3>
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
  let repo = 'aspenjames/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then(res => getIssues());
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
  //use fetch to fork it!
}

function showForkedRepo(json) {
  let repo = `
    <h3>Forked Successfully!</h3>
    <a href="${json.html_url}">${json.full_name}</a>
  `;
  $("#results").html(repo);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
