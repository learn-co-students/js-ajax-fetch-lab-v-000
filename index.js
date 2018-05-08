
function getIssues() {
  fetch("https://api.github.com/repos/tpetersen0308/javascript-fetch-lab/issues", {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(result => result.json()).then(json => showIssues(json))
}

function showIssues(json) {
  document.getElementById("issues").innerHTML = (JSON.stringify(json));
}

function createIssue() {
  let issueTitle = document.getElementById("title").value;
  let issueBody = document.getElementById("body").value;
  fetch("https://api.github.com/repos/tpetersen0308/javascript-fetch-lab/issues", {
    method: "post",
    "title": issueTitle,
    "body": issueBody,
    headers: {
      Authorization: `token ${getToken()}`
    }
  });

  getIssues();

  showIssues();
}

function showResults(json) {
}

function forkRepo() {

  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`,  {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(result => result.json()).then(json => showForkedRepo(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function showForkedRepo(json) {
  html = `<p><a href="${json.html_url}">View On Github</a></p><p>${JSON.stringify(json)}</p>`
  $("#results").html(html);
}