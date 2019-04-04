function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  //use fetch to fork it!

fetch(repo, {
  method: "POST",
  headers: {
    Authorization: `token ${getToken}`
  }
})
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
console.log(json);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const token = 'YOUR_TOKEN_HERE';
const postData = "test body";

fetch(
  'https://api.github.com/repos/DeedaG/js-ajax-fetch-lab/issues',
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken}`
    }
  }
).then(res => console.log(res));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating

  fetch('https://api.github.com/repos/DeedaG/js-ajax-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
