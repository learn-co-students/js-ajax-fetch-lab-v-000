function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  //.then(json => console.log(json)) - why can't I have this listed
  .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let title = document.getElementById('title').value //why can't I use this:  $('#title').val()
  let body = document.getElementById('body').value //why can't I user this: $('#body').value
  let postIssue = {
    "title": `${title}`,
    "body": `${body}`
  }
  fetch(`https://api.github.com/repos/cbshields/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`},
    body: JSON.stringify(postIssue)
  })
  .then(res => res.json())
  .then(json => getIssues(json))
}


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch("https://api.github.com/repos/cbshields/js-ajax-fetch-lab/issues", {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))

}

