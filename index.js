function getIssues() {
  
  fetch('https://api/github.com/repos/ff18qd/javascript-fetch-lab/issues', {
    // headers: {
    //   Authorization: `token ${token}`
    // }
  }).then(res => res.json()).then(json => showIssues()(json));
}

function showIssues(json) {
}

function createIssue() {
  
  const postData = {
    // "title": `$("#title").val()`,
    // "body": `$("#body").val()`
    "title": "test",
    "body": "test body",
    
  };
 
  const issueURL = 'https://api/github.com/repos/ff18qd/javascript-fetch-lab/issues'
  fetch(issueURL,  {method: 'post',
    body: JSON.stringify(postData.body),
    headers: {
    'Authorization': `token ${getToken()}`
  }
  })
  .then(resp => resp.json()).then(json => console.log(json));
}

function showResults(json) {
  const url = json.html_url
  // debugger
  $("#results").append(`<a href="${url}" >Forked Repository</a>`)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  // const repo = "/api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/"
  // const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(repo,  {method: 'post',
    headers: {
    'Authorization': `token ${getToken()}`
  }
  })
  .then(resp => resp.json()).then(json => showResults(json));
  
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
 
}
