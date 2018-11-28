function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  // change this back to an empty string before submitting the lab!!!
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(console.log("forked!"))
    .then(resp => resp.json())
    .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>Show Fork</a>`
}

function createIssue() {
  const repo = 'jmulloy/js-ajax-fetch-lab'
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value

  const postData = {title: `${title}`, body: `${body}`}

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }

  })
  
  .then(res => res.json())
  .then(json => getIssues())
}

function getIssues() {
  const repo = 'jmulloy/js-ajax-fetch-lab'

  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}
