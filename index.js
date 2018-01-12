const userName = 'aut0maat10'

function getIssues() {
  fetch(`https://github.com/${userName}/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issueList = "<ul>" + json.map(i => {
    `<li>
      <h3>${i.title}</h3>
      <p>${i.body}</p>
      <a href="${i.html_url} target="_blank">${i.title}</a>
    </li>
    `}).join('')
  $('#issues').html(getIssues); 
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const data = {
    'title': `${title}`,
    'body': `${body}`
  }
  const myInit = {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  };
fetch(`https://github.com/${userName}/javascript-fetch-lab/issues`, myInit).then(res => getIssues()).catch(error => error);
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => $('#results').html(showForkedRepo(json)));
}

function showForkedRepo(json) {
  const repoName = json.name;
  const repoURL = json.html_url;
  return `<a href="${repoURL}" id="url" target="_blank">${repoName}</a>`
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
