function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
      method: 'post',
      headers: {
          Authorization: `token ${getToken()}`
      }
  }).then(res => res.json()).then(showForkedRepo)
}

function showForkedRepo(response) {
    console.log(response)
    $('#results').html(template => { return(`
        <div>
            <h4>URL: <a href="${response.clone_url}">${response.name}</a></h4>
            <p>Created At: ${response.created_at}</p>
            <p>Forks: ${response.forks}</p>
            <p>Forks Count: ${response.forks_count}</p>
        </div>
    `)})
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
