function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  const token = getToken()
  //use fetch to fork it!
  fetch(repo,
    {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
  }

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueurl = "https://api.github.com/repos/mgoldfi1/js-ajax-fetch-lab/issues"
  const issue = {title: `${document.getElementById('title').value}`, body: `${document.getElementById('body').value}` }
  fetch(issueurl, {
    method: 'POST',
    body:  JSON.stringify(issue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues())
}

function getIssues() {

  fetch("https://api.github.com/repos/mgoldfi1/js-ajax-fetch-lab/issues").then(res => res.json()).then(json => showIssues(json))

  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function showIssues(json) {
  for (const x of json) {
    document.getElementById('issues').append(`${x.title}, ${x.body}`)
  }
}
