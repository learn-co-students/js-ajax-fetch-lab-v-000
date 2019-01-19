function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const token = getToken()
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch('api.github.com/repos/' + repo + '/forks',{
    method: 'POST',
    headers:{
        Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const token = getToken()
  const url = 'api.github.com/repos/jk-me/js-ajax-fetch-lab/issues'
  const postData = 'test body'
  fetch(url,{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: { Authorization: `token ${token}`}
  })
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const token = getToken()
  const url = 'api.github.com/repos/jk-me/js-ajax-fetch-lab/issues'
  fetch(url,{
    headers:{Authorization: `token ${token}`}
  })
  .then(res => res.json())
  .then(json => console.log(json))
}
