function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  const resultsDiv = document.getElementById('results');

  const detailsHeader = document.createElement('h3');
  detailsHeader.innerHTML = 'Repo Details';

  const repoName = document.createElement('p');
  const nameLabel = document.createElement('span');
  nameLabel.innerHTML= 'Name: ';
  const name = document.createElement('strong');
  name.innerHTML = json.name;
  repoName.appendChild(nameLabel);
  repoName.appendChild(name);

  const repoLink = document.createElement('a');
  const linkLabel = document.createElement('span');
  linkLabel.innerHTML = 'Link: ';
  const link = document.createElement('a');
  link.setAttribute('href', json.html_url);
  link.setAttribute('target', 'blank');
  link.innerHTML = 'Github page';
  repoLink.appendChild(linkLabel);
  repoLink.appendChild(link);

  resultsDiv.appendChild(detailsHeader);
  resultsDiv.appendChild(repoName);
  resultsDiv.appendChild(repoLink);

  console.log(json);
  //use this function to display the results from forking via the API
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;

  console.log(issueTitle);
  console.log(issueBody);

  fetch(`https://api.github.com/repos/wlycdgrfromflatiron/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${getToken()}`,
      'Content-Type': `application/json`
    },
    body: JSON.stringify({
      "title": issueTitle,
      "body": issueBody
    })
  })
    .then (getIssues());
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  fetch(`https://api.github.com/repos/wlycdgrfromflatiron/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => showIssues(json));
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function showIssues(json){
  const issuesList = document.createElement('ul');

  for (let issue of json){
    const issueItem = document.createElement('li');
    
    const title = document.createElement('h3');
    title.innerHTML = issue.title;

    const body = document.createElement('p');
    body.innerHTML = issue.body;

    issueItem.appendChild(title);
    issueItem.appendChild(body);

    issuesList.appendChild(issueItem);
  }

  document.getElementById('issues').appendChild(issuesList);
}