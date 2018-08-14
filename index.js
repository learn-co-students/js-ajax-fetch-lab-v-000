function getIssues() {
  fetch(`https://api.github.com/repos/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => console.log(json));
}

function showIssues(json) {
  $("#issues").html(json => getIssues())
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const postData = {
    title: title,
    body: body
  }

  fetch(`https://api.github.com/repos/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
};

function showResults(json) {
  $("#results").html(forkRepo())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
};

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ''
  return token
}
