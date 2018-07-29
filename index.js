


function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
 const issueTitle = $('#title').val()
 const issueBody = $('#body').val()


}

function showResults(json) {
}

function Repo(attributes){
  this.url = attributes.url;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {

    let repo = new Repo(resp);
    showRepo(repo)
  })
}

function showRepo(repo) {
  $('#results').append(`<li>Successfully Forked: <a href="${repo.url}">${repo.url}</a></li>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
