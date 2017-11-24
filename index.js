function getIssues() {
  fetch('https://github.com/kpiipari/javascript-fetch-lab/issues', {
    headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  debugger;
  const issueList = "<ul>" + json.map(i => {
    `<li>
      <h3>${i.title}</h3>
      <p>${i.body}</p>
      <a href="${i.html_url} target="_blank">${i.title}</a>
    </li>
    `}).join('')
    document.getElementById("issues").innerHTML = getIssues;
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const data = {'title': `${title}`,
  'body': `${body}`}
  const myInit = { method: 'post',
                   body: JSON.stringify(data),
                   headers: {
                     Authorization: `token ${getToken()}` }};
 
  
  fetch('https://github.com/kpiipari/javascript-fetch-lab/issues', myInit).then(res => getIssues()).catch(error => error);
  }

function forkRepo() {
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => $('#results').html(showForkedRepo(json)));
}

function showForkedRepo(json) {
  const repoName = json.name;
  const repoURL = json.html_url;
  return `<a href="${repoURL}" id="url" target="_blank">${repoName}</a>` 
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
