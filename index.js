function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', {
    method: 'POST',
    headers:{
      Authorization: `token ${getToken()}`
    }
  })
  .then(res=> res.json())
  .then(json=> showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  $('#results').append(`<a href="${json.html_url}"> ${json.html_url}</a>`)
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let postData = {title: title, body: body}
  fetch('https://api.github.com/repos/jimjim698/js-ajax-fetch-lab/issues', {
    method: 'post',
    headers:{
      Authorization:`token ${getToken()}`
    },
    body: JSON.stringify(postData)

  }).then(res=>getIssues())

  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  fetch('https://api.github.com/repos/jimjim698/js-ajax-fetch-lab/issues')
  .then(res=>res.json())
  .then(json=> json.map(json =>{
    $('#results').append(`<li><a href="${json.html_url}">${json.title}></a></li>`)
  }))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
