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

//use this function to display the results from forking via the API
function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}



//use this function to create an issue based on the values input in index.html
function createIssue() {
  // POST /repos/:owner/:repo/issues

  const baseURL = 'https://api.github.com'
  let url = `${baseURL}/repos/jpkim921/js-ajax-fetch-lab/issues`;

// we're grabbing the issue title and body from the webpage throught the DOM
  let postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

// the issues are posted using the POST method...
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers:{
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  // ...then we fetch all the open issues posted.
  .then(json => getIssues());
}

//once an issue is submitted, fetch all the open issues to see the issues you are creating. used above at the end of createIssue()
function getIssues() {
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
