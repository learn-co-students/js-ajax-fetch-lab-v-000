
let resultsDiv = document.getElementById('results');
let issuesDiv = document.getElementById('issues');

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(response => response.json())
  .then(json => showResults(json))
}

//use this function to display the results from forking via the API
function showResults(json) {
  resultsDiv.innerHTML = `<a href="${json.html_url}" target="_blank">JS AJAX Fetch Lab</a>`;
}

//use this function to create an issue based on the values input in index.html
function createIssue() {
  const forkedRepo = 'AAM77/js-ajax-fetch-lab'
  let postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(`https://api.github.com/repos/${forkedRepo}/issues`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(getIssues());

  document.getElementById('title').value = "";
  document.getElementById('body').value = "";
}

//once an issue is submitted, fetch all open issues to see the issues you are creating
function getIssues() {
  fetch('https://api.github.com/repos/AAM77/js-ajax-fetch-lab/issues')
  .then(response => response.json())
  .then(data => {
    data.forEach(issue => {
      issuesDiv.innerHTML +=
       `<ul>
          <li> Issue Number: ${issue.number} </li>
          <li> Issue Title: ${issue.title} </li>
          <li> Issue Text: ${issue.body} </li>
        </ul>`
    });
  });
}
