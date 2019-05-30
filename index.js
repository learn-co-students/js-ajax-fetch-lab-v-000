const baseUrl= "https://api.github.com/"

function getToken() {
  // const token = 'a6a51fb6b432c0502e4aa9cc4e678ada1dc3b45c'
  // return token;
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch( baseUrl + 'repos/' + repo + '/forks',
    {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const url = baseUrl + "repos/egreen724/js-ajax-fetch-lab/issues"
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
  const url = baseUrl + "repos/egreen724/js-ajax-fetch-lab/issues"

  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => document.getElementById('issues').append(json));
}
