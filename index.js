

function getIssues() {
  fetch('https://api.github.com/repos/ramell86/javascript-fetch-lab/issues/', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json =>
    console.log(json)
)
  
}

function createIssue() {
  // const json = showResults()
  var title = document.getElementById('title').value
  var body = document.getElementById('body').value
  debugger
  const postData = {title: title, body: body}
  fetch('https://api.github.com/repos/ramell86/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json)
  .then(json => showIssues(json))
}
function showIssues(json){
  debugger
  $('#issues').append(``)

}

function showResults(json) {
  var result = document.getElementById('results')
  debugger
  result.append(`<a href=${json.url}>${json.url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab/'
  fetch('https://api.github.com/repos/' + repo + 'forks', {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json))
  // debugger
  //use fetch to fork it!

  
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
