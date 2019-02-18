
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = "9eb6ec63888a44fb44805f537d84cebc4b2549fa";
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then (json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const userName = `<INPUT-USERNAME>`;


   const postData = {
     title: document.getElementById('title').value,
     body: document.getElementById('body').value
   }
    fetch(`https://api.github.com/repos/${userName}/js-ajax-fetch-lab/issues`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.join())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const userName = `<INPUT_USERNAME>`;

  fetch(`https://api.github.com/repos/${userName}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.join())
    .then(json => console.log(json));
}
