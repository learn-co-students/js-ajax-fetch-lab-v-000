const baseURL = 'https://api.github.com';
// Use const so variable can't change
const user = '<YOUR_USERNAME>';
// Create global variable to hold user name

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //Use const so variable can't change
  const url =`${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    // POST fetch
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  // Find the results div node in the document and add the json.html_url for the given token to it
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
   // /repos/:owner/:repo/issues
  const repo = `${user}/js-ajax-fetch-lab/issues`
   // POST address to create issue with Github API
  const url = `${baseURL}/repos/${repo}`
   // full url to create issues with the API
  const postData = {
  // Grabs the data we put in for title and body
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(url, {
    // POST fetch
    method: 'POST',
    body: JSON.stringify(postData), // Turns postData object into a string
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {
    // GET fetch
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
