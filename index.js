function getIssues() {
  fetch(`https://api.github.com/repos/jmstrick93/javascript-fetch-lab/issues`)
    .then(res => res.json()).then(json=> showIssues(json))
}

function showIssues(json) {
  console.log(JSON.stringify(json))

  let issuesHTML = '<ul>'
  for (let i of json) {

    issuesHTML += `<li>
    <p>${i.title}</p>
    <p>${i.body}</p>
    <p>${i.user.login}</p>`
  }
  issuesHTML += '</ul>'

  $('div#issues').html(issuesHTML)
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  const postData = {
        title: title,
        body: body
      }
  fetch(`https://api.github.com/repos/jmstrick93/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(()=> getIssues())

}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!0
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {return showForkedRepo(json)})
}

function showForkedRepo(response){
  $('div#results').html(`
    <p><a id="repoLink" href="https://github.com/${response.full_name}">${response.full_name}</a></p>
    ${JSON.stringify(response)}
    `)
}

function getToken() {
  return ''
}
