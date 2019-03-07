function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it! POST /repos/:owner/:repo/forks
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const url = `<a href="${json.html_url}">${json.html_url}</a>`;
  document.getElementById('results').innerHTML = url;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  // POST /repos/:owner/:repo/issues
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const postData = {
    title: title,
    body: body
  }
  fetch(
    `https://api.github.com/repos/mddilley/js-ajax-fetch-lab-v-000/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  // GET /repos/:owner/:repo/issues
  fetch(
    `https://api.github.com/repos/mddilley/js-ajax-fetch-lab-v-000/issues`,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => console.log(json));
}
