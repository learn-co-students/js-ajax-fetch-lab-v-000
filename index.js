const token = "12345"
const rootUri = "https://api.github.com/repos/"
const repo = "learn-co-curriculum/javascript-fetch-lab"


function getIssues(data) {
  fetch(`${rootUri}/javascript-fetch-lab/issues/`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function displayIssue(issue) {
  $('#issues').append(issue.template())
}

function showIssues(json) {
}

function createIssue() {
  const uri = 'javascript-fetch-lab/issues'
  const postData = document.getElementById('body').value
  fetch(uri, {
  method: 'post',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => getIssues());
}

function showResults(json) {
}

function forkRepo() {
  // const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const uri = rootUri + repo
  fetch(uri, {
  method: 'post',
  // body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
  //use fetch to fork it!
}

function showForkedRepo(repo) {
  $('#results').append(repo.template())
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
