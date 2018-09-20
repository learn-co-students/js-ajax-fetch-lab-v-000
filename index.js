const rootURL = 'https://api.github.com'
const user = 'kreopelle'
const repo = 'js-ajax-fetch-lab'

function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${rootURL}/repos/${repo}/forks`
  fetch(url,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
 }
  ).then(resp => resp.json())
  .then(json => showResults(json))
  //use fetch to fork it!
}

function showResults(json) {
  const url = `<a href="${json.html_url}"> ${json.html_url} </a>`
  document.getElementById("results").innerHTML = url
  //use this function to display the results from forking via the API
}

function createIssue() {
  const url = `${rootURL}/repos/${user}/${repo}/issues`
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => resp.json())
  .then(json => getIssues())
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  const url = `${rootURL}/repos/${user}/${repo}/issues`
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json())
  .then(json => displayIssues(json))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function displayIssues(json) {
  const listIssues = "<ul>" +
  json.map(j =>
    `<li><strong>${j.title}</strong>: ${j.body}</li>`
  ).join("") + "</ul>"
  document.getElementById("issues").innerHTML = listIssues
}
