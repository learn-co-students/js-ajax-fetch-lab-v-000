function indexIssues(json) {
  const index = json;
  let issuesList = `<ul>${index.map(i => '<li><a href="' + i.html_url + '">' + i.title + '</a> -- ' + i.body + '</li>').join('')}</ul>`
  document.getElementById("issues").innerHTML += issuesList;
}

function getIssues() {
  fetch('https://api.github.com/repos/eplof44/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => indexIssues(json));
}

function showIssues(json) {
  const issue = json;
  const issueDetails = `<p><a href="${issue.html_url}">${issue.title}</a></p><p>${issue.body}</p>`
  document.getElementById("issues").innerHTML += issueDetails;
}

function createIssue() {
  const issueData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };

  fetch('https://api.github.com/repos/eplof44/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(res => res.json()).then(json => showIssues(json));
}

function showResults(json) {
  const repo = json;
  const repoDetails = `<p><a href="${repo.html_url}">${repo.name}</a></p>`;
  document.getElementById("results").innerHTML += repoDetails;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const url = 'https://api.github.com/repos/' + repo + '/forks';

  fetch (url, {
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
