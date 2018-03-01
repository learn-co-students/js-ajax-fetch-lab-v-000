function getIssues() {
  const repo = 'igoreskin/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`)
    .then(res => res.json())
    .then (json => {
      showIssues(json)
    })
}

function showIssues(json) {
  let listOfIssues = `<ul>${json.map(el => `<li>${el.title} - ${el.body}</li>`).join('') }</ul>`
  document.getElementById("issues").innerHTML = listOfIssues
}

function createIssue() {
  let issueTitle = document.getElementById("title").value;
  let issueBody = document.getElementById("body").value;
  const repo = 'igoreskin/javascript-fetch-lab'
  const postData = {
    body: issueBody,
    title: issueTitle
  };
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => {
      getIssues()
  })
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => {
      showForkedRepo(json)
  })
}

function showForkedRepo(result) {
  document.getElementById("results").innerHTML = `<a href="${result.html_url}">Repo</a>`
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
