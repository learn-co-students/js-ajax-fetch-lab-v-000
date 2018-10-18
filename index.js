
const mine = 'https://api.github.com/repos/YourGitHubUserNameHere/javascript-fetch-lab'
const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'
function getToken() {

  return ''
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
}

function forkRepo() {
  fetch(`${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  $('#results').append(`<h4>Forked Successfully!</h4><a href="${json.url}">${json.full_name}</a>`);
}

function createIssue() {
  const title = document.getElementById('title').value
  const text = document.getElementById('body').value
  const postData = { title: title, body: text }
  fetch(`${mine}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(getIssues());
}

function getIssues() {
  fetch(`${mine}/issues`, {
  })
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++){
        displayIssue(new Issue(data[i]));
      }
    });
}

function Issue(response){
  this.title = response.title;
  this.body = response.body;
  this.url = response.url
  this.pageAddition = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
}

function displayIssue(data) {
  $('#issues').append(data.pageAddition)
}
