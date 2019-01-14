function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const token = getToken();
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => showResults(json))
}

https://github.com/AAM77/js-ajax-hitting-apis-lab-v-000/blob/master/js/index.js
function showResults(json) {
  //use this function to display the results from forking via the API
  $("#results").append(`<a href="${json.html_url}">${json.name}</a>`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
const repo = 'alexandrafren/js-ajax-fetch-lab'
let body = document.getElementById("body").value
let title = document.getElementById("title").value

let postIssues = {
  title: title,
  body: body
}

fetch(`https://api.github.com/repos/${repo}/issues`, {
  method: "post",
  body: JSON.stringify(postIssues),
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => getIssues())

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'alexandrafren/js-ajax-fetch-lab'
   fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(issues) {
 let issue = issues.map(function(issue) {
    $('#issues').append(
      `<h3>${issue.title}</h3><p<${issue.body}</p>`
      )
 })
}
