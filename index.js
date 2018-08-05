const forkedRepo = 'https://api.github.com/repos/FonzMP/javascript-fetch-lab/issues'

function getIssues() {
  fetch(forkedRepo)
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById("title").value
  const issueBody = document.getElementById("body").value

  const issueData = {
    title: issueTitle,
    body: issueBody
  }
  
  fetch(forkedRepo, {
    method: 'post',
    body: JSON.stringify(issueData), 
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => console.log(res));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(function(result) {
      return showForkedRepo(result)
    })
  }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function showForkedRepo(repo) {
  $('#results').html(`<a href="${repo.url}"> ${repo.url}</a>`)
}
