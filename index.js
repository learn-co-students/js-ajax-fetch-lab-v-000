// const postData = {
//   body: 'Great stuff'
// };

// fetch('https://github.com/jouissances/rebel-base/commit/7b134b2636cb5e8884093edecf7feee0a0005a74/comments', {
//   method: 'POST',
//   body: JSON.stringify(postData),
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//   .then(res => console.log(res));

const baseURL = 'https://api.github.com';
const user = 'jouissances';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = getToken();
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
          Authorization: `token ${token}`
        }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const displayUrl = `<a href=${json.html_url}>${json.html_url}</a>`;
  document.getElementById('results').innerHTML = displayUrl;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const token = getToken();
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const token = getToken();

  fetch(url, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

