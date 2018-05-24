function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    console.log(res);
    showForkedRepo(res)});
}

function showForkedRepo(res) {
  $('#results').append(formatLink(res));
}

function formatLink(res) {
  return `<div>
           <a href="${res.url}">Forked Repo</a>
           </div `
}



function getToken() {
  return 'e3ea1222710d2e156a7142bef2200df91339c974'
}
