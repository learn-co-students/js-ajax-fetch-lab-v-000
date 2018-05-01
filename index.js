function Repo(attributes) {
  this.url = attributes.url;
}

Repo.prototype.template = function() {
  let template = `<h3>Forked Successfully!</h3><a href="${this.url}">${this.url}</a>`;
  return template;
};

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const token = getToken();
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => {
    let repo = new Repo(res);
    showForkedRepo(repo); 
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo.template());
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
