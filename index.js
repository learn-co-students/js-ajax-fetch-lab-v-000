
const token = getToken();

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function showResults(json) {
  //use this function to display the results from forking via the API
  $('#results').append(`<h3>Fork:</h3><a href="${json.html_url}"> ${json.html_url}</a> - ${json.name}`);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var issue = {title: title, body: body}
  fetch(`https://api.github.com/repos/hala1224/js-ajax-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    },
    body: JSON.stringify(issue)
  }).then(resp => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const fork = `hala1224/js-ajax-fetch-lab`;
    fetch(`https://api.github.com/repos/${fork}/issues`, {
      method: 'get',
      headers: {
        Authorization: `token ${token}`
      }
    }).then(resp => resp.json()).then(data => showIssues(data));
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  

 
  return '';
}