const token = ''

function getIssues() {
  const theToken = getToken();
  fetch('https://api.github.com/repos/chrisrobertspdx/javascript-fetch-lab/issues', {
    method: 'GET',
    headers: {
      Authorization: `token ${theToken}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
  
}

function showIssues(json) {
  let issueHTML = '';
  for (let i=0; i < json.length; i++) {
    issueHTML += `<p><b>${json[i].title}</b><br>${json[i].body}</p>`
  }
  document.getElementById("issues").innerHTML = issueHTML;
}



function createIssue() {
  const theToken = getToken();
  const postData = { 
      title: `${document.getElementById("title").value}`,
      body: `${document.getElementById("body").value}`
    }
  fetch('https://api.github.com/repos/chrisrobertspdx/javascript-fetch-lab/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${theToken}`
    }
  }).then(res => res.json()).then(json => getIssues());
}

function showResults(json) {
  document.getElementById("results").innerHTML = `<a target="_blank" href="${json.html_url}">${json.name}</a><br><br>` + JSON.stringify(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const theToken = getToken();
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${theToken}`
    }
  }).then(res => res.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token
}
