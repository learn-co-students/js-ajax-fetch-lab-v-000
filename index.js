const baseURL = 'https://api.github.com';
const user = 'anihauktin';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';

}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(response => response.json())
  .then(json => showResults(json));
}

function showResults(json) {

  const link = document.createElement('a');
  link.setAttribute('href', json.html_url);
  link.setAttribute('target', "_blank");
  link.innerHTML = "Forked repo"

  const resultsDiv = document.getElementById('results');
  resultsDiv.appendChild(link);
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(
    `${baseURL}/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(response => response.json())
      .then(json => getIssues());
}

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`;

  fetch(
    `${baseURL}/repos/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(response => response.json())
  .then(json => console.log(json));
  // .then(json => updateDiv(json));

  function updateDiv (json) {
    // const list = `<ul> ${json.map(
    //   issue =>
    //   "<li>" +
    //   issue.title +
    //   "</li>"
    // )
    // .join(' ')} </ul>`;
    //
    // const issues = document.getElementById('issues');
    // issues.innerHTML = list;
  }
}
