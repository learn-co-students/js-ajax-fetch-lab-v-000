

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json()).then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const template = `<p><a href="${json.html_url}">${json.name}</a></p>`
  document.getElementById('results').innerHTML = template;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  const url = 'https://api.github.com/repos/NeedsAUsername/js-ajax-fetch-lab/issues';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => getIssues(json));
}

function getIssues(json) {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const url = 'https://api.github.com/repos/NeedsAUsername/js-ajax-fetch-lab/issues'
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => displayIssues(json));
}

function displayIssues(json) {
  let template = '<ul>';
  for (let i = 0; i < json.length; i++) {
    template += `<li><a href = "${json[i].html_url}">${json[i].title}</a> ${json[i].body}</li>`;
  }
  template += '</ul>';
  document.getElementById('issues').innerHTML = template;
}
