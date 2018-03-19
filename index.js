function getIssues() {
  fetch(`https://api.github.com/repos/username/javascript-fetch-lab/issues`).then(res => {
    res.json().then( json => {
      for (let i = 0; i < json.length; i++){
        displayIssue(new createIssue(data[i]));
      }
    })
  })
}

function showIssues(json) {
  let issue = `<li>Title: <a href="${json.url}">${json.title} </a><span> | Body: ${json.body}</span></li>`
  $('#issues').append(issue)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const data = { title: title, body: body }
  fetch(`https://api.github.com/repos/thepeej/javascript-fetch-lab/issues`, {
    method: "post",
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(res => getIssues())
}

function showResults(json) {
}

function showForkedRepo(repo) {
  let repo = `<h3>Forked Successfully!</h3><a href="${repo.url}"> ${repo.url}</a>`
  $('#results').append(repo.template())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(function(res){
    return showForkedRepo(res)
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

