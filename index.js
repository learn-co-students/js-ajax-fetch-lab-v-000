function getIssues() {
  const token = getToken()
  // GET /repos/:owner/:repo/issues
  fetch('api.github.com/repos/AdamT213/javascript-fetch-lab/issues', {
    headers: {
    Authorization: `token ${token}`
    }
  }).then(res => res.json(showIssues(json))).then(json => console.log(json));
}

function showIssues(json) {
  json.map(i => {
    i.title
    i.body
  })
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch('https://api.github.com/repos/' + repo + '/' + "forks", {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => (showForkedRepo(json)));
}

function showForkedRepo(json) {
  document.getElementById('results').append(json.url.link)
}

prototype.link = function(link) {
  <a href = link></a>
}

function getToken() {
  return '4e9dd5cb0788af72ddcfaaadccd02443819b8d7e';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return ''
}
