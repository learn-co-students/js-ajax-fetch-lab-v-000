

function getIssues(json) {
  fetch('https://api.github.com/repos/ndalcin/javascript-fetch-lab/issues', {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}


function showIssues(json) {
  let issues = json.map(issue =>{
    return `<li>${issue.title}: ${issue.body}</li>`
  })

  let issuesList = `<ul>${issues}</ul>`
  document.getElementById("issues").innerHTML = issuesList
}

function createIssue() {
  let data = {title: document.getElementById('title').value,
              body: document.getElementById('body').value}

  fetch('https://api.github.com/repos/ndalcin/javascript-fetch-lab/issues',{
    method: 'post',
    title: JSON.stringify(data),
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => getIssues(json))
}


function forkRepo() {
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(results){
  let repoLink = `<a href= ${results.html_url}>Repo</a>`
  document.getElementById("results").innerHTML = repoLink
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
