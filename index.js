function getIssues() {
  //let infoDataset = $("#results")[0].getElementsByTagName("a")[0].dataset
  //const owner = document.getElementById("results").getElementsByTagName("a")[0].dataset.owner
  //const repo = document.getElementById("results").getElementsByTagName("a")[0].dataset.repo
  fetch(`https://api.github.com/repos/KatieLars/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res=>res.json()).then(json=> showIssues(json))
}

function showIssues(json) {
  $("#issues").html(renderIssues(json))
}

function renderIssues(json) {
  return json.map((issue) => {return `<p><strong>${issue.title} - </strong>${issue.body}</p>`}).join('')
}

function createIssue() {
  //const infoDataset = document.getElementById("results")
  //[0].getElementsByTagName("a")[0].dataset
  //const owner = document.getElementById("results").getElementsByTagName("a")[0].dataset.owner
//  const repo = document.getElementById("results").getElementsByTagName("a")[0].dataset.repo
  const issueName = document.getElementById("title").value//$("#title").val()
  const issueBody = document.getElementById("body").value
  fetch(`https://api.github.com/repos/KatieLars/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify({
      title: issueName,
      body: issueBody
    }),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues())

}

function showResults(json) {
  const linkJson = `<a data-owner="${json.owner.login}" data-repo="${json.name}" href="${json.html_url}">${json.html_url}</a>`
  $("#results").html(linkJson)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
