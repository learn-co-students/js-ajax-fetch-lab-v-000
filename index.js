function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';

  // Running it will require that you return your personal token in getToken,
  //  however, the tests will not pass if you leave your token there, so before you 
  // commit and push, make sure you set
  //  return '' in the getToken function. 
  // NEVER give out your token or check it into GitHub!
}

function forkRepo() {
  const repo = '/api.github.com\/repos\/learn-co-curriculum\/js-ajax-fetch-lab\/forks/'
  fetch(repo,{
    method: 'POST',
     headers: {Authorization: `token ${getToken()}`}})
   .then(res => console.log(res));

}

function showResults(json) {
  //use this function to display the results from forking via the API
   fetch('')
   .then(response => response.json())
   .then(json =>
    document.write(`forkRepo()`));
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  issueRepo = "/api.github.com\/repos\/epic448/js-ajax-fetch-lab\/issues/"

  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
 }
 fetch( issueRepo,
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  
  )
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  issueGet = "/api.github.com\/repos\/epic448/js-ajax-fetch-lab\/issues/"
  
 fetch( issueGet,
  {
    method: 'GET',
      headers: {
      Authorization: `token ${getToken()}`
     }
   }
  
  )
}
// issueGet = "/api.github.com\/repos\/epic448/js-ajax-fetch-lab\/issues/"


// GET /repos/:owner/:repo/issues/

