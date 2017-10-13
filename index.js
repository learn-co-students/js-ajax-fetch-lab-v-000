function getToken() {
     return ''
}

function getIssues() {
var token = getToken();
var repo = 'lawrend/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'get',
      headers: {
          Authorization:`token ${token}`
      }
  }).then(res => res.json()).then(json => showIssues(json));
}



function showIssues(json) {
$("#issues").append(`<h1>${json.owner.login}</h1> <p>${json.issues}</p>`)

}


function createIssue() {
var token = getToken();
var titleText = document.getElementById("title").value;
var bodyText = document.getElementById("body").value;
var repo = 'lawrend/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'post',
      headers: {
          Authorization:`token ${token}`},
    title: `title ${titleText}`,
    body: `body ${bodyText}`
}
  ).then(res => res.json()).then(json => showIssues(json));

}

function showForkedRepo(json) {
    console.log(json);
    $("#results").append(`<h1>${json.owner.login}</h1> <p id="forked_repo_url"><a href=${json.html_url}>${json.html_url}</a></p>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  var token = getToken();
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
      method: 'post',
      headers: {
          Authorization:`token ${token}`
      }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}


