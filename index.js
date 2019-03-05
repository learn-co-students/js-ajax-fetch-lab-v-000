function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const token = getToken();
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json.html_url);
  $('#results').html(`<a href="${json.html_url}"> ${json.html_url} </a>`);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const owner = 'bethurban';
  const repo = 'js-ajax-fetch-lab';
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const postData = {
    title: title,
    body: body
  };
  const token = getToken();
  fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const owner = 'bethurban';
  const repo = 'js-ajax-fetch-lab';
  const token = getToken();
  fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(json => console.log(json));
}
