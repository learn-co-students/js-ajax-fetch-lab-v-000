function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = 'https://api.github.com/repos/' + repo + '/forks';
  fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json()).then(res => showResults(res));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const link = `<a href="${json.html_url}">View Repository</a>`
  return document.getElementById("results").innerHTML = link
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.querySelector('#title').value;
  const text = document.querySelector('#body').value;
  console.log(title, text);
  
  //use fetch to fork it!
  const url = 'https://api.github.com/repos/nhinhdao/js-ajax-fetch-lab/issues'
  fetch(url, {
      method: 'POST',
      title: title,
      body: text,
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json());
    return document.getElementById("issues").innerHTML = getIssues();
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const url = 'https://api.github.com/repos/nhinhdao/js-ajax-fetch-lab/issues'
  fetch(url, {headers: {
      Authorization: `token ${getToken()}`
    }})
  .then(res => res.json());
}
