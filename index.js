const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
};

function forkRepo() {
  const token = getToken();
  const ownerAndRepo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const forkURL = `https://api.github.com/repos/${ownerAndRepo}/forks`
  //use fetch to fork it!
  fetch(forkURL, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => response.json())
  .then(json => showResults(json));
};

function showResults(json) {
  //use this function to display the results from forking via the API
  const repoURL = json.html_url;
  const repoOwner = json.owner.login;
  const repoName = json.name;
  document.getElementById("results").innerHTML = `Congratulations! <a href=${repoURL} data-info=${repoOwner}_${repoName}>${repoURL}</a> `;
};

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const postData = { title: title, body: body };

  // const dataInfo = document.getElementsByTagName("a")[1].dataset.info.split('_');
  // const owner = dataInfo[0];
  // const repo = dataInfo[1];
  const owner = 'emanuelbierman'
  const repo = 'js-ajax-fetch-lab'
  const issuesURL = `https://api.github.com/repos/${owner}/${repo}/issues`;

  fetch(issuesURL, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
  .then(json => getIssues(issuesURL));
  //use this function to create an issue based on the values input in index.html
};

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const owner = 'emanuelbierman'
  const repo = 'js-ajax-fetch-lab'
  const issuesURL = `https://api.github.com/repos/${owner}/${repo}/issues`;
  fetch(issuesURL, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
  .then(json => showIssues(json));
};

function showIssues(json) {
  const issuesList = json.map(i => `
    <li>Title: ${i.title}<br>
    Body: ${i.body}<br>
    Open: ${i.state}<br>
    </li>`).join('');
  document.getElementById("issues").innerHTML = issuesList;
}
