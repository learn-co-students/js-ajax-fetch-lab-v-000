function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab-v-000'
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: "post",
  	headers: {
  		Authorization: `token ${token}`
  	}
  }).then(res => res.json()).then(json => showForkedRepo(json))
  //use fetch to fork it!
}

function showForkedRepo(res) {
	$("#results").append(`<p><a href="${res.html_url}">${res.html_url}</a></p>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return "4594012857ff7659a29c9261f7e428b9fd2b7008"
  return ""
}