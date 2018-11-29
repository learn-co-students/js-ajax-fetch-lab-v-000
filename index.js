const baseURL = 'https://api.github.com';
const user = 'amckean12';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  //url output 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {method: 'POST', headers: {Authorization: `token ${getToken()}`}}).then(data => data.json).then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  //1.Getting the div with the id of results
  //2.Setting the InnerHTML to a link to the repo given by the json arguement
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo  = `${user}/js-ajax-fetch-lab`;
  //Pre Github API
  const url = `${baseURL}/repos/${repo}/issues`
  //Setting the Issue content
  const issueContent = {title: document.getElementById('title').value, content: document.getElementById('body').value};
  //Why JSON? instead of JSON. Also read more on stringify
  fetch(url, {method: 'POST', body: JSON.stringify(issueContent), headers: {Authorization: `token ${getToken()}`}}).then(data => data.json).then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {method: 'GET', headers: {Authorization: `token ${getToken()}`}}).then(data => data.json).then(json => console.log(json));
}
