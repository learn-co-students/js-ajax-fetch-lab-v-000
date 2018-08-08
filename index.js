function getIssues() {
  fetch('https://api.github.com/repos/KimGonzales/javascript-fetch-lab/issues').
    then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  const issuesDiv = document.getElementById("issues");
  const IssuesList = "<ul>" + json.map(issue => {
    return (
      `<li>
        <h6>${issue.title}</h6>
        <p>${issue.body}</p>
      </li>`
    )
  }).join('') + "</ul>";
  issuesDiv.innerHTML = IssuesList;
}

function createIssue() {
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;
  const postData = {title: issueTitle, body: issueBody}
  fetch('https://api.github.com/repos/KimGonzales/javascript-fetch-lab/issues',{
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => getIssues())
}


function showForkedRepo(json){
  let resultsDiv = document.getElementById("results");
  let link = document.createElement("a");
  link.href = `${json.html_url}`;
  link.innerHTML = `${json.html_url}`;
  resultsDiv.appendChild(link);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then (json => showForkedRepo(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}


