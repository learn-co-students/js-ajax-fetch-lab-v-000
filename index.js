

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`,
  {
    method: "POST",
    headers: {
      Authorization: `token ${token}`
    }
  }
  )
  .then(res => res.JSON)
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">Repo</a>`;
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  fetch('https://api.github.com/repos/dmcgrann/js-ajax-fetch-lab/issues', {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(
      {title: `${title}`,
      body: `${body}`}
    ) 
  }).then(getIssues());
}

function getIssues() {
  fetch('https://api.github.com/repos/dmcgrann/js-ajax-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => document.getElementById('issues').innerHTML = json.map(
    j => j.title + '<br />'));
}
