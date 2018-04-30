function getIssues() {
  fetch('https://api.github.com/repos/lizbur10/javascript-fetch-lab/issues', {
    headers: {
      Authorization: 'token ' + getToken()
    }
  }).then(res => res.json()).then(json => showIssues(json));

}

function showIssues(issues) {
  $.each(issues, function (index, issue) {
    console.log(issue.title)
    $("#issues").append(`
      <p>${issue.title}: ${issue.body}</p>
    `)
  })
}

function createIssue() {
  const issueData = {
    "title": document.getElementById("title").value,
    "body": document.getElementById("body").value
  }
  fetch(`https://api.github.com/repos/lizbur10/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: 'token ' + getToken() 
    }
  }).then(res => console.log(res));
  getIssues();
}

function showForkedRepo(json) {
  $("#results").append(`
    <p><a target="_blank" href="${json.html_url}">${json.html_url}</a></p>
  `);
  console.log(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: 'token ' + getToken() 
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));

  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
