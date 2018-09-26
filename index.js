const url = "https://api.github.com"
const username = "chalt0319"


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}


function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  let forkurl = url + "/repos/" + repo + "/forks"

  fetch(forkurl, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(function (json) {
    console.log(json)
    return json})
  .then(json => showResults(json))
  //use fetch to fork it!
}

function showResults(json) {
  console.log("in show results")
  let html = `<ul><li><a href="${json.html_url}">${json.full_name}</a></li></ul>`
  document.getElementById("results").innerHTML = html
  //use this function to display the results from forking via the API


}

function createIssue() {
  const repo = username + "/js-ajax-fetch-lab"
  const issueURL = `${url}/repos/${repo}/issues`
  //use this function to create an issue based on the values input in index.html
  let title = document.getElementById("title").value
  let body = document.getElementById("body").value


  let info = {
    "title": `${title}`,
    "body": `${body}`
  }
  fetch(issueURL, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => getIssues())

}

function getIssues() {
  const repo = username + "/js-ajax-fetch-lab"
  const issueURL = `${url}/repos/${repo}/issues`
  console.log("it worked")
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(issueURL)
  .then(response => response.json())
  .then(function (json) {
    let urls = json.map(function (e) {
      return `<ul><li>${e.user.login} - ${e.title} - ${e.body}</li></ul>`
    }).join("")
    document.getElementById("issues").innerHTML = urls
  })

}
