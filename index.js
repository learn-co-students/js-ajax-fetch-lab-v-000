

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
 
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    body: JSON.stringify('postData'),
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  
  fetch(`/js-ajax-fetch-lab/issues/`, {
    method: 'POST',
    title: JSON.stringify(title),
    body: JSON.stringify(body),
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));


}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`/js-ajax-fetch-lab/issues/`, {
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
  
}
