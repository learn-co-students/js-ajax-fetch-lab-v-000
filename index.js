function getIssues() {
  const repo = 'rsteinbach61/javascript-fetch-lab'
  let token = getToken();
  fetch(`${ghurl}repos/${repo}/issues`, {
    headers:{
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => {showIssues(json)});

}

function showIssues(json) {

  //const repos = JSON.parse(json)
  var src = document.getElementById("issues-template").innerHTML
  var template = Handlebars.compile(src)
  var repoList = template(json)

  document.getElementById("issues").innerHTML = repoList

}

function createIssue() {
  const repo = 'rsteinbach61/javascript-fetch-lab'
  const issueData = {body: document.getElementById("body").value, title: document.getElementById("title").value}
  let token = getToken();

  fetch(`${ghurl}repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),

    headers:{
      Authorization: `token ${token}`
    }
  })
  //.then(res => console.log(res));
  getIssues();

}

function showResults(json) {

}
const ghurl = "https://api.github.com/";

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  let token = getToken();
  //use fetch to fork it!
  fetch(`${ghurl}repos/${repo}/forks`, {
    method: 'post',
    headers:{
      Authorization: `token ${token}`
    }

  }).then(res => res.json()).then(json => {
    showForkedRepo(json);
  })

}

function showForkedRepo(r){
  var repoList = `<h3>Forked</h3><a href="${r.html_url}"> ${r.url}</a>`;
  document.getElementById("results").innerHTML = repoList;
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
