function getIssues() {
  fetch("https://api.github.com/repos/DGMarkel/javascript-fetch-lab/issues", {
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

  fetch("https://api.github.com/repos/DGMarkel/javascript-fetch-lab/issues", {
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
  const token = '8b0a5af428341b9d1a86d63f286f56ed6587126f'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token: ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));

}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
