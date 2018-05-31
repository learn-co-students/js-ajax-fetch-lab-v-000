function getIssues() {
  fetch(`https://api.github.com/RonaldVilorio/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token 0`
    }
  })
  .then(resp => resp.json())
  .then(json => console.log(json));
}


function showIssues(json) {
}

function createIssue() {
  fetch(`https://api.github.com/RonaldVilorio/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token 0`
    },
    body: 'test body'
  })
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token 0`
    }
  })
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function getToken() {
  return ''
}
