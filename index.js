function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '6d3a6fb4f5392d289aace320c0db11dbb30dccec';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const uri = `https://api.github.com/repos/${repo}/forks`
  fetch(uri, {
   method: 'POST',
   headers: {
     Authorization: `token ${getToken()}`
    }
   })
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const uri = 'https://api.github.com/repos/kritirai/js-ajax-fetch-lab/issues';
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;

  fetch(uri, {
    method: 'POST',
    title: title,
    body: body,
    headers: {
      Authorization: `token ${getToken}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'kritirai/js-ajax-fetch-lab';
  const uri = `https://api.github.com/repos/${repo}/issues`;

  fetch(uri).then(res => res.json()).then(json => console.log(json));
}
