function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  return $("#results").html(`<a href=${json.html_url}>Show Forked Repo</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, getToken).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  // const token = '4c6bb47b91f6ebef2f3d2afc61b31f999eec5b67';
  const token = {
    headers: {
      Authorization: `token 4c6bb47b91f6ebef2f3d2afc61b31f999eec5b67`
    }
  };
//
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//   .then(res => res.json())
//   .then(json => console.log(json));
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return ''
  console.log(token);
  return token;
}
