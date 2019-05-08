function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = getToken()

  fetch(
  'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  console.log(json)
  let html = `<p><strong id="repo-name">${json.name}</strong> : <span id="owner">${json.owner.login}</span></strong></p><a href="${json.html_url}" target="_">Your Fork</a>`
  document.querySelector('#results').innerHTML = html;
}

function createIssue() {
  const token = getToken()
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#body').value;
  const body = JSON.stringify({ title: title, body: content });

  fetch(
  'https://api.github.com/repos/nateshuster/js-ajax-fetch-lab/issues',
    {
      method: 'POST',
      title: title,
      body: body,
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => getIssues());
}

function getIssues() {
  const token = getToken()

  fetch(
  'https://api.github.com/repos/nateshuster/js-ajax-fetch-lab/issues',
    {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    }
  );
}
