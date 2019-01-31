function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(
    `https://api.github.com/repos/${repo}/forks`, {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const result =
    `<div><a href="${json.html_url}">${json.name}</a></div>`
    document.getElementById('results').innerHTML = result
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let repo = 'lauradarlak/js-ajax-fetch-lab'
  const postData = {title: document.getElementById('title').value, body: document.getElementById('body').value}

  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  let repo = 'lauradarlak/js-ajax-fetch-lab'
  fetch(
    `https://api.github.com/repos/${repo}/issues`, {
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
}
