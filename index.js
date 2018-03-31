function getIssues() {
  fetch('https://api.gihub.com/repos/bkhartmire/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let issues = '<ul>' + json.map(i => {
    return (`<li><a href="${i.url}">${i.title}</a></li>`)
  }).join('') + '<ul>'
  document.getElementById("issues").innerHTML = issues;
}

function createIssue() {
  let title =document.getElementById("title").value
  let body = document.getElementById("body").value
  let post = {title: title, body: body}
  fetch('https://api.gihub.com/repos/bkhartmire/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(post)
  }).then(getIssues())
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
  }).then(res => res.json()).then(json => showForkedRepp(json))
}

function showForkedRepo(res){
  let results = res
  let template = `<h3>Repo Forked!</h3><a href="${results.url}">${results.url}</a>`
  document.getElementById("results").innerHTML = template;
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
