function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '';
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const baseURL = 'https://api.github.com'
  let url = `${baseURL}/repos/${repo}/forks`

  // GET base/repos/:owner/:repo/forks

  // console.log(url)
  // const token = getToken();

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
    // .then(json => console.log(json));


}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  // POST /repos/:owner/:repo/issues

  const baseURL = 'https://api.github.com'
  let url = `${baseURL}/repos/jpkim921/js-ajax-fetch-lab/issues`;


  let postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers:{
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const baseURL = 'https://api.github.com';
  const repo = `jpkim921/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;

  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
