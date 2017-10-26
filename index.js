const baseUrl = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'

const myUrl = 'https://api.github.com/repos/sdklos/javascript-fetch-lab'

function getIssues() {
  fetch(`${myUrl}/issues`,
    {
      method: 'get',
      headers: {
        'Authorization': `token ${getToken()}`
      }
    }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json)

  $('#issues').append(displayIssues(json))
}

function displayIssues(json) {
  return json.map(issue =>
  `<div>
    <h2>${issue.title}</h3>
    <p>${issue.body}</p>
  </div>`
  );
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = { title: title, body: body }
  fetch(`${myUrl}/issues`,
    {
      method: 'post',
      body: JSON.stringify(postData),
      headers: {
        'Authorization': `token ${getToken()}`
      }
    }).then(getIssues());
}

function showResults(json) {

}

function forkRepo() {

  fetch(`${baseUrl}/forks`,
    {
      method: 'post',
      headers: {
        'Authorization': `token ${getToken()}`
      }
    }).then(res => res.json()).then(json => showForkedRepo(json));
}

function showForkedRepo(json) {
  console.log(json)
  document.getElementById('results').innerHTML = `<a href='${json.html_url}'>${json.html_url}</a>`
}
function getToken() {
  return ''
  // return ''
}
