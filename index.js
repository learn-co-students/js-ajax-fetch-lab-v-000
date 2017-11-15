function getIssues() {
  $.get(`https://api.github.com/repos/laramontana/javascript-fetch-lab/issues`)
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const issues = json.map(issue => `<h2>${issue.title}</h2><p>${issue.body}</p>`)
  $("#issues").append(issues)
}

function createIssue() {
  const title = $("#title").val()
  const body = $("#body").val()
  const data = {title: title, body: body}
  fetch(`https://api.github.com/repos/laramontana/javascript-fetch-lab/forks`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  const url = json.html_url
  $("#results").append(`<a target="_blank" href="${url}">${url}</a>`)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''//
}

//
// const token = '';
// const postData = {
//   body: 'Test #2'
// };
//
// fetch('https://api.github.com/repos/laramontana/art-galleries-navigator-rails-portfolio-project/commits/d59f7f3929ff7f1acbcb572c98cef03e69d3b2a7/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => console.log(res));
