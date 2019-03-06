const userName = 'akshay1dhingra'
const usernameAndRepo = `${userName}/js-ajax-fetch-lab`
const baseUrl = 'https://api.github.com'
// 

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  let token = getToken()
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post', 
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json()).then(json => showResults(json))
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  // $('#results').html(`<a href=${json.html_url}>${json.html_url}</a>`)
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let token = getToken()
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value 
  let postData = { title: title, body: body }

  fetch(`https://api.github.com/repos/${usernameAndRepo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json()).then(res => console.log(res))
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  let token = getToken()

  fetch(`${baseUrl}/repos/${usernameAndRepo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
}

