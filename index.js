const token = 'eece3f633e4d2f7e3da0c';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: "POST",
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">Repo</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  fetch('https://api.github.com/repos/rahymoc/js-ajax-fetch-lab/issues',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      },
      body: JSON.stringify(
        {
          title: `${title}`,
        body: `${body}`
      })
    }).then(getIssues())
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('https://api.github.com/repos/rahymov/js-ajax-fetch-lab/issues',
    {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json())
      .then(json => document.getElementById('issues').innerHTML = json.map(
        i => i.title + `<br />`));
}
