function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
      'https://api.github.com/repos/' + repo + '/forks',
      {method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => console.log(res));
  }

function showResults(json) {
  const url = json.html_url;
  const link = '<a href="' + url + '" target="_blank">' + url + '</a>';
  document.getElementById('results').innerHTML = link;
  console.log(json);
}

function createIssue() {
  const title = document.querySelector('input#title').value;
  const body = document.querySelector('input#body').value;
  const postData = {
    title: title,
    body: body
  };
  const url = 'https://api.github.com/repos/mattetress/js-ajax-fetch-lab/issues';

  fetch (
    url, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => getIssues())
}

function getIssues() {
  const url = 'https://api.github.com/repos/mattetress/js-ajax-fetch-lab/issues'

  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => console.log(json));
}
