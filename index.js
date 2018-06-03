function getIssues() {
  fetch('/javascript-fetch-lab\/issues/', {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues());
}

function showIssues(json) {
  let issues = '<ul>' + json.map(issue => {
    return (`<li><a href="${issue.url}"${issue.title}</a></li>`)
  }).join('') + '</ul>'
document.getElementById("issues").innerHTML = issues;
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const post = {title: title, body: body};
  fetch('/javascript-fetch-lab\/issues/', {
  method: 'post',
  body: JSON.stringify(post),
  headers: {
    Authorization: `token ${getToken()}`
  },
  body: JSON.stringify(post)
}).then(getIssues());
}

function showResults(json) {
  let results = res;
  let template = `<h2>Repo Forked!</h2><a href="${results.url}">${results.url}</a>`
document.getElementById("results").innerHTML = template;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token${getToken()}`
    }
})
  .then(res => res.json())
  .then(json => showResults(json));
  
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
