const userName = ''
const apiEndPoint = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function displayIssue(data) {
  $('#issues').append(`<h3>Title: <a href="${data.url}">${data.title}</a></h3> <p>Body: ${data.body}</p>`)
}

function getIssues() {
  fetch(`${apiEndPoint}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(data[i]);
        }
      })
    })
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody};
  fetch(`${apiEndPoint}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues());
}

function showForkedRepo(response) {
  document.getElementById("results").innerHTML += `<h3>Fork Successful!</h3><a href="${response.url}"> ${response.url}</a>`
}

function forkRepo() {
  fetch(`${apiEndPoint}repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => showForkedRepo(res));
}

function getToken() {
  return ''
}
