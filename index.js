const baseURL = 'https://api.github.com'
const owner = 'shravnk'
const repo = 'javascript-fetch-lab'

function getIssues() {
  const url = `${baseURL}/repos/${owner}/${repo}/issues`
  fetch(url)
  .then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  $('#issues').html(renderIssues(json))
}

function renderIssues(json) {
  return json.map(issue => {
    return `
      <h1>Title: ${issue.title}</h1><br>
      <p>Body: ${issue.body}</p>
    `
  })
}

function createIssue() {
  const url = `${baseURL}/repos/${owner}/${repo}/issues`
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(url, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(json => getIssues())
}

function showResults(json) {
  // console.log(json);
  const link = `<a href="${json.html_url}">Repository URL</a>`
  console.log(link);
  $('#results').html(link)
}

function forkRepo() {
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
  fetch(url, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ``
}
