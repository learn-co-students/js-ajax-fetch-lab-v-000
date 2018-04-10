function getIssues() {
  const url = "https://api.github.com/repos/hambrice/javascript-fetch-lab/issues"
  fetch(url).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  debugger;

  $("#issues").html(json[0].url)
}

function createIssue() {
  const issueData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  const url = "https://api.github.com/repos/hambrice/javascript-fetch-lab/issues"
  //const url = document.getElementsByTagName('a')[1].href.slice(0,8) + "api." +document.getElementsByTagName('a')[1].href.slice(8,19)+ "repos/" + document.getElementsByTagName('a')[1].href.slice(19) + '/issues'
  //debugger;
  fetch(url, {
    method: 'post',
    body: JSON.stringify(issueData),
  headers: {
    Authorization: `token ${getToken()}`
  }})
  getIssues()

}

function showResults(json) {
  let results = "<a href='" + json.html_url + "'>Link to Fork</a> "
  $("#results").html(results)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = 'https://api.github.com/repos/' + repo +'/forks'
  fetch(url, { method: 'post', headers: {
    Authorization: `token ${getToken()}`
  }}).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
