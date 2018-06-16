const username = 'jamespferguson'

function Issue(attributes){
  this.title = attributes.title
  this.body = attributes.body
  this.url = attributes.url
}

function getIssues(data) {
  fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){

          showIssue(new Issue(data[i]));

        }
      } )
    })
}

function showIssue(issue) {
element= `<li>title:${issue.title} ,body:${issue.body}</li>`//what goes here?)
  $('#issues').append(element)
}

function createIssue() {
    const token = '';
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {

    token = '';
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: 'post',

  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function showForkedRepo(repo) {
  $('#results').append(repo.template())
}
