//const baseURL = 'https://api.github.com'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '3b67f5cbfe386aa4a48c288c4d7fe5197dd94029';
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //const url = `${baseURL}/repos/${repo}/forks`; 
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`,
  {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => res.json())
 .then(json => showResults(json));

}
//POST /repos/:owner/:repo/forks

//In showResults, write code to display a link to the forked repo url (json.html_url). Append this link to the results div.
function showResults(json) {
  //use this function to display the results from forking via the API
  //const newdiv = $("<div id="results"></div>");
  $("#results").html(`<a href="${json.html_url}">${json.html_url}</a>`)
  // $("#results").append(showResults(json));
}

//var $newdiv1 = $( "<div id='object1'></div>" ),
//$(selector).append(content,function(index,html))

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
