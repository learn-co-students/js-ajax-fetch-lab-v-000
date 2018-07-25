function getIssues() {
  const repo = 'rhogotargaryen/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, { headers: { authorization: `token ${getToken()}` } }).
  then(resp => resp.json()).
  then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
  $('#results').html(json.map(iss => `<ul><li><h3>${iss.title}</h3></li><li>${iss.body}</li></ul>`).join(""))
}

function createIssue() {
  const repo = 'rhogotargaryen/javascript-fetch-lab'
  const title = { title: document.getElementById('title').value }
  const body = { body: document.getElementById('body').value }
  const postData = { title: title, body: body }
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData),
  }).
  then(res => res.json()).then(getIssues())
}

function showResults(json) {
  $('#results').html(`<h2>${json.full_name}</h2>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      authorization: `token ${getToken()}`
    }
  }).
  then(res => res.json()).then(json => showResults(json)).then(getIssues())
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  return ''
}
