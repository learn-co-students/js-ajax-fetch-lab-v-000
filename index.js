const baseURL  = 'https://api.github.com';
const user = 'MonksAndNinjas';

function getToken() {
  const token = '8650e1bd4df60bca4329b0076f39cdb618efdb13';
  //return token;
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo  = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url   = `${baseURL}/repos/${repo}/forks`;
  //use fetch to fork it!
  fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url  = `${baseURL}/repos/${repo}/issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  //use this function to create an issue based on the values input in index.html
  fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(json => getIssues());
}

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url  = `${baseURL}/repos/${repo}/issues`;
  const token = '8650e1bd4df60bca4329b0076f39cdb618efdb13';
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(url, {
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(json => showIssues(json));
}

function getIssue(result) {
  return `<strong>Title: </strong>
  ${result.title}
  <p><strong>Body: </strong>${result.body}</p>
  <br></br>`;
}

function showIssues(json) {
  //$('#issues').html()
  const result = json.map(result => getIssue(result)).join('');
  document.getElementById('issues').innerHTML = `<br></br>${result}`;
}
