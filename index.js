const user = 'elleeb'

function getToken() {
  // const token = 'xxxxxx'
  //
  // fetch(`https://api.github.com/user/repos`, {
  //   headers: {
  //     Authorization: `token ${token}`
  //   }
  // })
  // .then(res => res.json())
  // // .then(json => console.log(json))
  return ''
  // return token
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab'
  //use fetch to fork it!
  // POST /repos/:owner/:repo/forks
  fetch(`https://api.github.com/repos/${repo}/forks`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  // link to the forked repo url + append this link to the results div
  let div = document.getElementById('results')

  div.innerHTML = '<a href=' + json.html_url + '>' + json.html_url + '</a>'
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  // Use the title and body inputs from the provided form as data for your fetch request
  // POST /repos/:owner/:repo/issues
  const repo = 'js-ajax-fetch-lab'
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`https://api.github.com/repos/${user}/${repo}/issues`,
  {
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
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'js-ajax-fetch-lab'
  fetch(`https://api.github.com/repos/${user}/${repo}/issues`,
    {headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  let div = document.getElementById('issues')

  json.forEach(issue => div.innerHTML += '<p>' + issue.body + '</p>')
}
