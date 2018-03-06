const repo = 'learn-co-curriculum/javascript-fetch-lab'
const myFork = 'hcarnes/javascript-fetch-lab'
async function getIssues() {
  let issuesResponse = await fetch(`https://api.github.com/repos/${myFork}/issues`)
  let issues = await issuesResponse.json()

  showIssues(issues)
}

function showIssues(issues) {
  for (const issue of issues) {
    $("#issues").append(`<a href="${issue.html_url}">${issue.title}</a>`)
  }
}

async function createIssue() {
  const issueData = {
    title: $("#title").val(),
    body: $("#body").val()
  };
  await fetch(`https://api.github.com/repos/${myFork}/issues`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  })
  getIssues()
}

function showResults(json) {}

async function forkRepo() {
  let forkRepoResponse = await fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })

  let jsonResponse = await forkRepoResponse.json()

  $("#results").text(JSON.stringify(jsonResponse))
  $("#results").prepend(`<a href="${jsonResponse.html_url}">${repo}</a><br>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
