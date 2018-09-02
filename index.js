const token = `59be9d77882277a85a7185c5847428008ae35c86`;
const baseUrl = `https://api.github.com`;
const fork = `VictoriaMeng/javascript-fetch-lab`;

function getIssues() {
  fetch(`${baseUrl}/repos/${fork}/issues`).
    then(resp => resp.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML);
  document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const issue = { title: title, body: body };
  fetch(`${baseUrl}/repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify(issue)
  }).then(resp => getIssues())

}

function showResults(json) {
  document.getElementById("results").innerHTML += json.documentation_url;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseUrl}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json()).
    then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ``
}
