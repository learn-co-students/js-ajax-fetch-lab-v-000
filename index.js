function getIssues() {
  fetch("https://api.github.com/repos/paaaarv/javascript-fetch-lab/issues", {
    headers:{
    Authorization: `token: ${getToken()}`}
    });
  }


function showIssues(json) {
}

function createIssue() {
  const issueBody = {
    body: "test body"
  }
  fetch("https://api.github.com/repos/paaaarv/javascript-fetch-lab/issues",{
    method: "post",
    body: JSON.stringify(issueBody),
    headers: {
      Authorization: `token: ${getToken()}`

    }
  })
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}`, {
    method: "post",
    headers: {
      Authorization: `token: ${getToken()}`
    }
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
