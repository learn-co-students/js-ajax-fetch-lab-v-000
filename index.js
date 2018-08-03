const username = ''
const fork = `${username}/javascript-fetch-lab`

function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`)
    .then(res => res.json()).then(json => showIssues(json));
}

function displayIssues(json) {
  for (let i = 0; i < json.length; i++) {
    return `
      <p><a href="${json[i].url}">${json[i].title}</a> - ${json[i].body}</p>
    `
  }
}

function showIssues(json) {
  let result = document.getElementById("issues");
  result.innerHTML = displayIssues(json);
  console.log(json);
}

function createIssue() {
  const data = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify(data),
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
