const forkedRepo = "marielfrank/javascript-fetch-lab";
const issuesUrl = `https://api.github.com/repos/${forkedRepo}/issues`;

function getIssues() {
  console.log(issuesUrl)
  fetch(issuesUrl, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(jsonData => showIssues(jsonData));
}

function showIssues(jsonArray) {
  $('#issues').html(jsonArray.map(issue => `<h3>${issue.title}</h3>${issue.body}<br>`).join(""))
}

function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(issuesUrl, {
    method: 'post',
    title: JSON.stringify(postData),
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json());
  getIssues();
}

// function showResults(json) {
// }

function showForkedRepo(jsonData) {
  $('#results').html(`<a href='${jsonData.html_url}' target='_blank'>${jsonData.full_name}</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
   
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(jsonData => showForkedRepo(jsonData));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '04570d508a27b840317f401be6f8361afcd90e79';
  return '';
}
