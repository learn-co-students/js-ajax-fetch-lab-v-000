const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function getIssues() {
  fetch("https://api.github.com/repos/javascript-fetch-lab/issues").then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json);
  const issues = "<ul>" + json.map(error => {
    return `
    <li><h4>Title: ${error.title}</h4>
    <p>Status: ${error.state}</p>
    <p>Context: ${error.body}</p></li>
    `
  }) + "</ul>"
  $("#issues").append(issues);
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function showForkedRepo(res){
  console.log(res)
  const repo = `<a href="${res.html_url}">${res.html_url}</a>`
  $("#results").html(repo)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
