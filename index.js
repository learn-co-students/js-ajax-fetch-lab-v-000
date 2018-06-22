const repo = 'learn-co-curriculum/javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/skalum/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issues =  `<ul>${json.map(function(issue) {
    return `
      <li>
        ${issue.number}. ${issue.title} <br>
        <p>${issue.body}</p>
      </li>
    `;
  }).join('')}</ul>`;

  document.getElementById("issues").innerHTML = issues;
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch(`https://api.github.com/repos/skalum/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  }).then(res => res.json()).then(json => console.log(json));

  getIssues();
}

function showResults(json) {
  const result = `
    <div>
      <h1>${json.name}</h1>
      <p><a href="${json.html_url}">Repo</a></p>
    </div>
  `

  document.getElementById("results").append(result);
}

function forkRepo() {
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
