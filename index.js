function getIssues() {
  fetch('https://api.github.com/repos/kheyro/javascript-fetch-lab/issues')
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json);
}

function createIssue() {

  let title = document.getElementById('title').value
  let text = document.getElementById('body').value

  const postData = { title: title, body: text }

  fetch(`https://api.github.com/repos/kheyro/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues())
}

function showResults(json) {
  // return $('#results').html(json)
  console.log(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
