

const repoURL = '/javascript-fetch-lab';

function getIssues() {
  fetch(`https://api.github.com/repos/${repoURL}/issues`).then(result => {
    result.json().then(json => {
      showIssues(issue);
    })
  })



}

function showIssues(json) {
  const issuesList = json.map(issue => {
    return (`
      ${issue.title}<br>
      ${issue.body}<br>
      <a href="${issue.html_url}">view on github</a><br>
    `)
  }).join('')
  document.querySelector("#issues").innerHTML = issuesList
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const issueData = {
    title: issueTitle,
    body: issueBody
  }
  fetch(`https://api.github.com/repos/${repoURL}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(result => result.json()).then(json=> getIssues());

}

function showResults(json) {

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(result => {
    showForkedRepo(result);
  });
}

function showForkedRepo(repo) {
  $('#results').html(`Forked <a href="${repo.url}">${repo.url}</a>!`);
}

function getToken() {
  return ''
}
