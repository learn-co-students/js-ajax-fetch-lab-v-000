const repoURI = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
const issueURI = 'https://api.github.com/repos/javascript-fetch-lab/forks'

function forkRepo() {
  fetch(repoURI, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => {
    this.url = resp.url;
    showForkedRepo(resp);
  })
}

function showForkedRepo(resp){
  $('#results').append(`Forked: <a href="${this.url}"> ${this.url}</a>`);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
