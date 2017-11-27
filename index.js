function getIssues() {
  const repoName = $('a#repoLink')[0].innerHTML
  fetch(`https://api.github.com/repos/${repoName}/issues`)
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
  const repoName = $('a#repoLink')[0].innerHTML
  const postData = {
        title: $('input#title')[0].value,
        body: jQuery('input#body')[0].value
      }
  fetch(`https://api.github.com/repos/${repoName}/issues`, {
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
  return '8fd3652b0121a1af5eaaa6d67b77e0c938326ad9'
}
