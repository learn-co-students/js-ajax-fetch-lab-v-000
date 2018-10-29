function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
 return '';
  
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks'
  fetch(url, {
  method: 'POST',
  headers: {
      Authorization: `token ${getToken()}`
    }
}).then(res => res.json())
.then(json => showResults(json))
  
  }
const myFork = 'https://api.github.com/repos/nkdmiller/js-ajax-fetch-lab/issues';
function showResults(json) {
  //use this function to display the results from forking via the API
  const myData = json.html_url;
  document.getElementById('results').innerHTML = '<a href="' + myData + '">link</a>';
}
 function createIssue() {
  //use this function to create an issue based on the values input in index.html
  title = document.getElementById('title').value;
  body = document.getElementById('body').value;
  fetch(myFork, {
    method : 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({"title": title, "body": body})
  })
    .then(getIssues);
}
 function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(myFork)
    .then(resp => resp.json())
    .then(json => document.getElementById("issues").append(json));
}
