function getIssues() {
  fetch('https://api.github.com/repos/kevinYCKim33/javascript-fetch-lab/issues')
    .then(res => res.json())
    .then(json => showIssues(json));
}
  // GET /repos/:owner/:repo/issues

function showIssues(json) {
  const issuesList = "<ul>" + json.map(issue => {
    return(`
          <li>
            <h3>${issue.title}</h3>
            <p>${issue.body}</p>
          </li>
            `)
  }).join("") + "</ul>"
  document.getElementById("issues").innerHTML = issuesList;
}

function createIssue() {
  const myTitle = document.getElementById("title").value;
  const myBody = document.getElementById("body").value;
  const postData = {
    title: myTitle,
    body: myBody
  }
  // const myAddress = document.getElementById("huh").getAttribute("data-fullname");
  const apiRequest = `https://api.github.com/repos/kevinYCKim33/javascript-fetch-lab/issues`;
  fetch(apiRequest, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues)
  // getIssues() it works, but won't list the thing
}

function showResults(json) {
  link = `<a id="huh" href=${json.clone_url} data-fullname=${json.full_name}> Go to forked Repo </a>`;
  document.getElementById("results").innerHTML = link;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
