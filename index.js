const baseApi = `https://api.github.com`

class Repo {
  constructor(responseData) {
    this.url = responseData.url
  }

  template() {
    return `<h3>Forked Successfully!</h3><a href="${this.url}">View All Forks</a>`
  }
}



function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`${baseApi}/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then((response) => {
    console.log(this);
    console.log(response);
    const repo = new Repo(response)
    repo.template()
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
