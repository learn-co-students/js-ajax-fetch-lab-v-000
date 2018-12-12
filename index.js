const baseURL = 'https://api.github.com';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '1c13bb04695ac045d29a99daf0ea6be075d26e2f';

// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//   .then(res => res.json())
//   .then(json => console.log(json));
  return token;
  // return '';
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response=>response.json())
    .then(json=>showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML =
  `<a href= ${json.html_url}>${json.html_url}</a>`;
  console.log(json)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
