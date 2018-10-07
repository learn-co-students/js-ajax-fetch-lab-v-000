function getIssues(el) {
  console.log(el)
  // debugger
  // let user = document.querySelector('[data-user]').dataset.user;
  let user = 'katrpilar';
  let url = `https:/api.github.com/repos/${user}/javascript-fetch-lab/issues`;
  console.log(url)
  fetch(url).then(data => data.json()).then(json => showIssues(json));
}

function showIssues(data) {
  console.log(data);
  return $('#issues').html(`<ul>${data.map( i =>
    `<li>${i.title} <br> ${i.body}</li>`
  ).join('')}</ul>`)
}

function createIssue() {
  // let user = document.querySelector('[data-user]').dataset.user;
  let user = 'katrpilar'
  let url = `https:/api.github.com/repos/${user}/javascript-fetch-lab/issues`;
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  fetch(url,{
    body: JSON.stringify({
    "title": title,
    "body": body
    }),
    method: "post",
    headers:{
      "Content-Type": "application/json; charset=utf-8",
      Authorization: getToken()
    }
}).then(data => data.json()).then(json => getIssues(json));
}

function showResults(json) {
  console.log(json);
  let newCommitUrl = (json.html_url + '/issues');
  newCommitUrl = newCommitUrl.substring(0,7)+"api."+newCommitUrl.substring(8,19)+"repos/"+newCommitUrl.substring(19,newCommitUrl.length);
  $('#search').attr('data-url', newCommitUrl);

  return $("#results").html(`<a href=${json.html_url} data-user="${json.owner.login}">Show Forked Repo</a>
    <br><a href=# data-url="${json.html_url}" onclick="getIssues(this);">Get Issues</a>
    `)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: getToken()
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  const token = 'token';
  return '';
}
