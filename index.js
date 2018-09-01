function getIssues() {
  fetch('https://api.github.com/repos/malbazaz/javascript-fetch-lab/issues').then(res=>res.json())
}

function showIssues(json) {
  document.getElementById("issues").innerHTML = json
}

function createIssue() {
  const title = document.getElementById("title").value
  const text = document.getElementById("body").value

  fetch(`https://api.github.com/repos/malbazaz/javascript-fetch-lab/issues`,{
  method: "post",
  title: `${title}`,
  body: `${text}`,
  // body: JSON.stringify(res),
  headers: { Authorization: `token ${getToken()}`}
}).then(res=>res.json())

showIssues(getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  // let token = 'hello'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks',{
  method: "post",
  // body: JSON.stringify(res),
  headers: { Authorization: `token ${getToken()}`}
}).then(res=>res.json()).then(jsonres=>showForkedRepo(jsonres))
}
// then(res=>showForkedRepo(res))
function showForkedRepo(repo){
document.getElementById("results").innerHTML = repo
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
