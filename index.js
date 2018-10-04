function getIssues(el) {
  let url = el.dataset.url + '/issues';
  url = url.substring(0,7)+"api."+url.substring(8,19)+"repos/"+url.substring(19,url.length);
    fetch(url).then(data => data.json()).then(json => showIssues(json));
}

function showIssues(data) {
  console.log(data);
  return $('#issues').html(`<br><ul>${data.map( i =>
    `${i.title} <br> ${i.body}`
  ).join('')}</ul><br>`)
}

function createIssue() {
  let url = $('#search').attr('data-url');
  let title = $('#title').val();
  let body = $('#body').val();
  fetch(url,{
    body: JSON.stringify({
    "title": title,
    "body": body
    }),
    method: "POST",
    headers:{
      "Content-Type": "application/json; charset=utf-8",
      Authorization: getToken()
    }
}).then(data => data.json()).then(json => showIssues(json));
}

function showResults(json) {
  console.log(json);
  let newCommitUrl = (json.html_url + '/issues');
  newCommitUrl = newCommitUrl.substring(0,7)+"api."+newCommitUrl.substring(8,19)+"repos/"+newCommitUrl.substring(19,newCommitUrl.length);
  $('#search').attr('data-url', newCommitUrl);

  return $("#results").html(`<a href=${json.html_url}>Show Forked Repo</a>
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
