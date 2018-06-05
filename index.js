function getIssues() {
  const path = 'https://api.github.com/repos/';
  const repo = 'rhhaynes/javascript-fetch-lab/issues';
  fetch( path+repo, {
    headers: {Authorization: getToken()}
  })
  .then(res => res.json())
  .then(json => showIssues(json));
}

function showIssues(json) {
  const issues = JSON.parse(json);
  const html = '<h3>Issues:</h3><ul>' + issues.map(issue =>
    `<li><strong>${issue.title}</strong><br/>${issue.body}</li><br/>`).join('')+'</ul>';
  document.getElementById('issues').innerHTML = html;
}

function createIssue() {
  const path = 'https://api.github.com/repos/';
  const repo = 'rhhaynes/javascript-fetch-lab/issues';
  const issueData = {
    title: 'test title',
    body:  'test body'
  };
  fetch( path+repo, {
    method:  'post',
    body:    JSON.stringify(issueData),
    headers: {Authorization: getToken()}
  })
  .then(res => res.json())
  .then(json => getIssues());
}

function showResults(json) {
  const obj  = JSON.parse(json);
  const html = `<h3>Results:</h3>
    <a href="${obj.html_url}">${obj.html_url}</a>`;
  document.getElementById('results').innerHTML = html;
}

function forkRepo() {
  const path = 'https://api.github.com/repos/';
  const repo = 'learn-co-curriculum/javascript-fetch-lab/forks';
  fetch( path+repo, {
    method: 'post',
    headers: {Authorization: getToken()}
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  return '';
}
