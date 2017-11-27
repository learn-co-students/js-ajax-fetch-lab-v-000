function getIssues() {
  debugger
  fetch(`https://api.github.com/repos/${repoName}/issues`)
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
}

function createIssue() {
  const repoName = $('a#repoLink')[0].innerHTML
  debugger
  fetch(`https://api.github.com/repos/${repoName}/issues`, {
    method: 'post',
    title: $('input#title')[0].value,
    body: $('input#body')[0].value,
    headers: {
      Authorization: `token ${getToken()}`
    }
  });
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
    <p><a id="repoLink" href="https://github.com/${response.full_name}"">${response.full_name}</a></p>
    ${JSON.stringify(response)}
    `)
}

function getToken() {
  return 'f1338889df1a8111658a1caa7d1987edf4a438dd'
}
