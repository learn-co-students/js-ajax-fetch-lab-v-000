const username = ''

/*fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => resp.json()).then(json => console.log(json));

const postData = {
  body: 'Great Stuff'
};

fetch('https://api.github.com/repos/cboujoukos/Active-Record-Association-Methods-v-000/commits', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => resp.json()).then(json => console.log(json));

fetch('https://api.github.com/repos/cboujoukos/Active-Record-Association-Methods-v-000/commits/bc915468f3641a1ab98313f31de60ba5f21cafa1/comments', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => console.log(resp)) */

function getIssues() {
  fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  $("#issues").html(json.map(i =>
  `<h3>${i.title}</h3>
  <p>${i.body}</p>`))
}

function createIssue() {
  const issue = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(`https://api.github.com/repos/${username}/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(issue),

    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => console.log(resp));
  getIssues();
}

function showResults(json) {
  console.log(json)
  const resultsDiv = document.getElementById("results")
  //resultsDiv.innerHTML += '<a href="' + json.html_url + '">' + json.name + '</a>'
  $("#results").html(`<a href="${json.html_url}">${json.name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
