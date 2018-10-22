function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const uri = `https://api.github.com/repos/${repo}/forks`
  const token = getToken()
  fetch(uri, {
   method: 'POST',
   headers: {
     Authorization: `token ${getToken}`
    }
   })
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let json = forkRepo()
  return json
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'kritirai/js-ajax-fetch-lab';
  const uri = `https://api.github.com/repos/${repo}/issues`;
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
