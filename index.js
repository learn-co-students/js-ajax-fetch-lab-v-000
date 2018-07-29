
const rootApi = "https://api.github.com/"
const userName = ""
const fork = `${userName}/javascript-fetch-lab`
const repo = 'learn-co-curriculum/javascript-fetch-lab'

function Issue(response){
  this.title = response.title;
  this.body = response.body;
  this.url = response.url
  this.pageAddition = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
}

function getIssues() {
  fetch(`${rootApi}repos/${fork}/issues`)
    .then(data => data.map(d)(showIssues(new Issue(d[i]))))
}

function showIssues(data) {
  $('#issues').append(data.pageAddition)
}

function createIssue() {
  let isTitle = document.getElementById('title').value
  let isBody = document.getElementById('body').value
  fetch(`${rootApi}repos/${fork}/issues`,
  {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({title: isTitle, body: isBody})
  }).then(res => console.log(res))
    // getIssues())
}

function showResults(json) {
}

function Repo(response) {
this.url = response.url
this.pageAddition = `<h2> Forked Sucessfully! <a href="${this.url}"> ${this.url}</a></h2>`
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${rootApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => {

    let repo = new Repo(res);
    showForkedRepo(repo);
    console.log("Response:", repo)
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo.pageAddition)
}

function getToken() {
    return ''
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  // return ''
}
