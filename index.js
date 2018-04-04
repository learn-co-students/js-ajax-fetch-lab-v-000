function getIssues() {
  const repo = 'mevanstron/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/issues`)
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json);

  const issues = '<ul>' + json.map(
    j => {
      return (`
        <li>
          <p>${j.title}<br>
          ${j.body}</p>
        </li>`)
    }
  )

  document.getElementById('issues').innerHTML = issues
}

function createIssue() {
  const repo = 'mevanstron/javascript-fetch-lab'
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(getIssues());
}

function showResults(json) {
  const repoLink = `<p><a href="${json.html_url}" target="_blank">${json.name}</a></p>`;
  document.getElementById('results').innerHTML = repoLink;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
