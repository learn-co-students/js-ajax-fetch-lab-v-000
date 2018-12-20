const token = "00a7db1e1a6523abc86e0ffcd3e1592247301cff";

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch('https://api.github.com/repos/' + repo + '/forks', {
          method: 'POST',
          headers: {
              Authorization: `token ${getToken()}`
          }
      })
      .then(res => res.json())
      .then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').append(`<a href="${json.url}">Forked Repository</a>`);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueTitle = document.getElementById('title').value;
  const issueText = document.getElementById('body').value;
  const postData = {
      title: title,
      body: body
    }
    fetch('https://api.github.com/repos/rschaubeck/js-ajax-fetch-lab/issues', {
            method: 'POST',
            headers: {
                Authorization: `token ${getToken()}`
            },
            body: JSON.stringify({title: issueTitle, body: issueText})
        }).then(json => getIssues(json));
}


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('https://api.github.com/repos/rschaubeck/js-ajax-fetch-lab/issues', {
          method: 'GET',
          headers: {
              Authorization: `token ${getToken()}`
          },
      }).then(res => res.json())
}
