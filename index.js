function getIssues() {
  const repo = 'jlmack13/javascript-fetch-lab'
  const url = 'https://api.github.com/repos/' + repo + '/issues'
  fetch(url).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  $("#issues").html(json.map( issue => {
    `<h3>${issue.title}</h3><p>${issue.body}</p>`
  }).join(""))
}

function createIssue() {
  const repo = 'jlmack13/javascript-fetch-lab'
  const url = 'https://api.github.com/repos/' + repo + '/issues'
  const issueData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  fetch(url, {
    method: 'post',
    title: JSON.stringify(issueData),
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json());
  getIssues();
}

function showResults(json) {
  var results = document.getElementById('results');
  results.append(string)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const url = 'https://api.github.com/repos/' + repo + '/forks'
  //use fetch to fork it!
  fetch(url, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    console.log(res);
    showForkedRepo(res.url)
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return ''
}
