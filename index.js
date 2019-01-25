const token = '';
const baseURL = 'https://api.github.com';
const user = 'yinazee'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
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
    }
  ).then(res => res.json())
  .then(data => showResults(data));
};


function showResults(data) {
  // debugger
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${data.html_url}>${data.html_url}</a>`;

}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
   fetch(url, {
     headers: {
       Authorization: `token ${getToken()}`
     }
   })
     .then(res => res.json())
     .then(json => console.log(json));
}
