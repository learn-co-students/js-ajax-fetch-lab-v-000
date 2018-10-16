function getToken() {
  //change to your token to run in browser, but set
  
  //back to '' before committing so all tests pass
  // return '';
  return token;
}

function forkRepo() {
  let url = `https://api.github.com/repos/learn-co-curriculum/repo/js-ajax-fetch-lab`;

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  let displayResults = document.getElementById('results')
  displayResults.innerHTML =  <a href=`${json.html_url}`>Link To Fork</a>
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
