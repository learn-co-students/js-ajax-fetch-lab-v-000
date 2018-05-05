
 const token = ""
const baseApi = 'https://api.github.com/'
const fork = `jgrantbrown/javascript-fetch-lab`

function getIssues() {
  fetch(`${baseApi}repos/${fork}/issues`)
  .then(resp => {
      resp.json()
      .then( issues => {

          console.log(issues)
         issues.forEach(issue => displayIssue(issue))
    })
  })
}

function displayIssue(issue) {
  console.log(issue)
  $('#issues').html(issuesResult(issue))
}

function issuesResult(issue){
  return `
  <p> ${issue.name} </p>
  `
}

function createIssue() {

  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value
  const repo = 'jgrantbrown/javascript-fetch-lab'
  const postData = { "title": issueTitle, "body": issueBody }
  // POST /repos/:owner/:repo/issues

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then( resp => getIssues())
}

function showResults(json) {
  $('#results').html(linkResult(json))
}

function linkResult(json){
  return `
  <a href="${json.html_url}">${json.name}</a>
  `
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  // POST /repos/:owner/:repo/forks  repo = :owner/:repo
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => res.json() )
  .then( json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
   return token

}
