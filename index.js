function getIssues() {
  const repo = 'sophiav/javascript-fetch-lab';
  
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issueList = json.map(issue => `<li>${issue.title} - ${issue.body}</li>`).join('');

  $('#issues').html(`<ul>${issueList}</ul>`)
}

function createIssue() {
  const title = document.getElementById('title').value;
  const text = document.getElementById('body').value
  const repo = 'sophiav/javascript-fetch-lab'

  const data = {
    title: title,
    body: text
  }

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(() => getIssues())
}

// function showResults(json) {
// }

function showForkedRepo(res) {
  const link = `<a href="${res.html_url}" >${res.name}</a>`
  $('#results').append(link)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

