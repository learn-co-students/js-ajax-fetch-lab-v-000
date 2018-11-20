
//
function getToken() {

  return '';
}

function forkRepo() {
//  'learn-co-curriculum/js-ajax-fetch-lab'
  const repo = "https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks/";

  fetch(`${repo}`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }

  } )
     .then(resp => resp.json())
     .then(res => showResults(res));
  //use fetch to fork it!


}

function showResults(json) {
debugger
  //use this function to display the results from forking via the API
}
//
function createIssue() {
  //use this function to create an issue based on the values input in index.html
    const repo = "https://api.github.com/repos/roitblatari/js-ajax-fetch-lab/issues/";

    const postData = {
      title: document.getElementById('title').value,
      body:  document.getElementById('body').value

    };
//     //
    fetch(
      repo ,
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          Authorization: `token ${getToken()}`
        }
      }
    ).then(res => json(res))
     .then(json => getIssues(json))

}
//
function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = "https://api.github.com/repos/roitblatari/js-ajax-fetch-lab/issues/";

  fetch(
    repo,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(results => json(results))
   .then(json => document.write(json))
}
