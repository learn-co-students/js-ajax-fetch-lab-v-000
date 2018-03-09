function getIssues() {
  const token = getToken()
  const owner = document.getElementById('owner').value
  const repo = document.getElementById('repo').value
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    headers: {
    Authorization: `token ${token}`
    }
  }).then(function(result) {
      // return the issues
      return result.json()
    })
    .then(function(result) {
      showIssues(result)
    })
    .catch((error) => {
      console.log(error)
    })
}

function showIssues(json) {
  const issueList = `<ul>${json.map(i => '<li>' + i.title).join('')}</ul>`
  document.getElementById("issues").innerHTML = issueList
}

function createIssue() {
  const token = getToken()  
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const owner = document.getElementById('owner').value
  const repo = document.getElementById('repo').value
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: 'post',
    headers: {
    Authorization: `token ${token}`
    },
    body: JSON.stringify({
      title: title,
      body: body
    })     
  }).then(function() {
      getIssues()
    })
    .catch((error) => {
      console.log(error)
    })
}

function showForkedRepo(json) {
  // set the owner login and repo name in HTML hidden fields for use in 
  // the createIssue and getIssues functions
  document.getElementById('owner').value = json.owner.login
  document.getElementById('repo').value = json.name
  const repo = `<p><a href="https://github.com/${json.full_name}" target="_blank">Get Repo</a></p>`
  document.getElementById("results").innerHTML = repo
}

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork the repository
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
    Authorization: `token ${token}`
    }
    
  }).then(function(result) {
      // return the forked repository
      return result.json()
    })
    .then(function(result) {
      showForkedRepo(result)
    }) 
    .catch((error) => {
      console.log(error)
    })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
