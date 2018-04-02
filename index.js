function getIssues() {
  const baseUrl = "https://api.github.com/repos/"
  const repo = '/javascript-fetch-lab'
  const owner = $('#result').attr("data-owner")
  fetch(`${baseUrl}${owner}${repo}/issues`).
    then(resp => {
      resp.json()
})
}

function showIssues(json) {
   $('#issues').append(`<a id="result" data-owner="${json.owner.login}" href="${json.html_url}">${json.html_url}</a>`)
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  const baseUrl = "https://api.github.com/repos/"
  const repo = '/javascript-fetch-lab'
  const owner = $('#result').attr("data-owner")
  const title = $('#title')
  const body = $('#body')
  const postData = { title: title, body: body }

  fetch(baseUrl + owner + repo +'/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues())
}

function showResults(json) {
}

function showForkedRepo(json) {
 $('#results').append(`<a id="result" data-owner="${json.owner.login}" href="${json.html_url}">${json.html_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch("https://api.github.com/repos/" + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json))

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '739ebc5ecb601ce11e7deeb6708b80d02f2838ab'
}
