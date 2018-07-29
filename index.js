
const rootApi = "https://api.github.com/"
const userName = ""
const fork = `${userName}/javascript-fetch-lab`


function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function Repo(response) {
this.url = response.url
this.pageAddition = `<h2> Forked Sucessfully! <a href="this.url"> ${this.url}</a></h2>`
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${rootApi}repos/${repo}/forks`, {
    method: 'POST',
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
   return '5c4fcba27e0e29e1ff73d52f8c722c76b45bb6c1'
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  // return ''
}
