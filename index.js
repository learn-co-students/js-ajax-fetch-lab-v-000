const username = 'AlexGZhang2014'
const fork = `${username}/javascript-fetch-lab`

function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(json => showIssues(json));
}

function showIssues(json) {
  let result = document.getElementById("issues");
  result.innerHTML = `${json.title}`;
  console.log(json);
}

function createIssue() {
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'post',
    title: JSON.stringify(document.getElementById("title").value),
    body: JSON.stringify(document.getElementById("body").value),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues());
}

function showResults(json) {
  let result = document.getElementById("results");
  result.innerHTML = `<p><a href="${json.url}">${json.url}</a></p>`;
  console.log(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
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
