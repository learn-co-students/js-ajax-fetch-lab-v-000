function getIssues() {
  const repo = 'chrissyhunt87/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  let issues = '<ul>';
  for (let obj in json) {
    issues += `<li><a href="${json[obj]['html_url']}">${json[obj]['body']}</a></li>`
  }
  issues += '</ul>'
  document.getElementById("issues").innerHTML = issues;
}

function createIssue() {
  const postData = {
    title: `${document.getElementById("title").value}`,
    body: `${document.getElementById("body").value}`
  }
  const repo = 'chrissyhunt87/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues())
}

function showResults(json) {
  const fork = `<a href="${json['html_url']}">${json['html_url']}</a><br>`
  document.getElementById("results").innerHTML = fork;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  return ''
}
