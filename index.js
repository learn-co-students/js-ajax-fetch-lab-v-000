function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return 'a5de6ffcc74a14fe26e5f7da307b20dbd4c5f48b';

  return '';
}

const myFork = 'https://api.github.com/repos/minasman/js-ajax-fetch-lab/issues';

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method : 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp =>resp.json())
    .then(json => showResults(json));
  //use fetch to fork it!
}

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
