
const apiUrl = 'https://api.github.com/'
const user = "joselycas"

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = `https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`;
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error(`Error: ${error}`))
}

function showResults(json) {
  const results = document.getElementById("results").value
  //append elements to page js

}

function createIssue() {
  const url = apiUrl + `/repos/${user}/js-ajax-fetch-lab/issues`;
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const postData = {
    title: title,
    body: body
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json))
}
  // use this function to create an issue based on the values input in index.html


function getIssues() {
  const url = apiUrl + `/repos/${user}/js-ajax-fetch-lab/issues`
  const issues = document.getElementById("issues").value
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
