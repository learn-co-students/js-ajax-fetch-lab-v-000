const github = "https://api.github.com/"

function getIssues() {
  fetch(`${github}repos/rockychiang/javascript-fetch-lab/issues`).then(data => data.json()).then(data => {
    for (let i=0; i<data.length; i++){
      $('#issues').append(`<a href="${data[i].url}">${data[i].title}</a><br><p>${data[i].body}</p>`)
    }
  })
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody};

  fetch(`${github}repos/rockychiang/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => getIssues())
}

function showForkedRepo(repo) {
  $('#results').append(`<a href="${repo.url}">${repo.url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${github}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(data => showForkedRepo(data))
}

function getToken() {
  return ''
}
