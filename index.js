function getIssues() {
  fetch(`https://api.github.com/repos/ynebuhs/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues);
}

function showIssues(body) {
  $("#issues").append("<h2>${body.title}</h2> <br><p>${body.body}</p>")
}

function createIssue() {
  var title = document.getElementById("title").value
  var body = document.getElementById("body").value
  fetch(`https://api.github.com/repos/ynebuhs/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: {
      "title": title,
      "body": body
    }
  }).then(res => res.json()).
    then(getIssues);
}


function showForkedRepo(body) {
  $("#results").html("<a href=`${body.html_url}`>${body.name}</a>")
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).
    then(showForkedRepo);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}