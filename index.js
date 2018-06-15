const base = "https://api.github.com/";
const userName = '';

function getIssues() {
  fetch(`${base}repos/${userName}/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    for(issue of json) {
      showIssues(issue);
    }
  });
}

function showIssues(issue) {
  const issues = "<ul>" +
    `
    <h4>Title: ${issue.title}</h4><br>
    <li>
    Body: ${issue.body}<br />
    State: ${issue.state}<br />
    Created By: ${issue.user.login}<br />
    </li>
    ` + "</ul>"
  $("#issues").append(issues);
}

function createIssue() {
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;

  const issueData = {
    title: issueTitle,
    body: issueBody
  };
  fetch(`${base}repos/${userName}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(res => getIssues());
}

function showResults() {
}

function forkRepo() {
  // POST /repos/:owner/:repo/forks
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  //fork repo here and call showForkedRepo() to display in results div
  fetch(`${base}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
  // append json results to results div here
  const repoUrl = `Successfully Forked: <a id="forkedRepo" href="${json.html_url}" data-owner="${json.owner.login}">${json.html_url}</a>`
  $("#results").html(repoUrl);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
