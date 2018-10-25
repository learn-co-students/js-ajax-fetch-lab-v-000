function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

const token = getToken();

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const url = json.html_url;
  const repo = json.name;
  document.querySelector('#results').innerHTML = (`<a href="${url}">${repo}</a>`);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issue = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  
  fetch('https://api.github.com/repos/theresamorelli/js-ajax-fetch-lab/issues', {
    method: 'POST',
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => getIssues());
}

function getIssues(json) {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('https://api.github.com/repos/theresamorelli/js-ajax-fetch-lab/issues', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => displayIssues(json))
}

function displayIssues(json) {
  document.querySelector('#issues').innerHTML = json.map(element => {
    return `<h3>${element.title}</h3>
    <p>${element.body}</p><br>`
  }).join('');
}
