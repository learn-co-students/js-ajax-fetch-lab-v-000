const owner = 'gb23';

function getIssues() {
  fetch(`https://api.github.com/repos/${owner}/javascript-fetch-lab/issues`)
  .then(resp => {
    resp.json().then(data => {
      for (let i = 0; i < data.length; i++){
        showIssues(data[i]);
      }
    })
  });
}

function showIssues(issue){
  $('#issues').append(`<li>
    Title: <a href="${issue.url}">${issue.title}</a><br>
    Body: ${issue.body}
    </li>`)
}

function createIssue() {
  //POST /repos/:owner/:repo/issues
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const postdata = {title: title, body: body};

  fetch(`https://api.github.com/repos/${owner}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postdata)
  }).then(resp => getIssues());
}

function showResults(json) {

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => showForkedRepo(resp));
}

function showForkedRepo(forkedRepos) {
    $('#results').append(`<a href="${forkedRepos.url}">${forkedRepos.url}</a>`)
}		  

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
