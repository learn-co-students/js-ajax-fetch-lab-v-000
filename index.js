const baseURL = 'https://api.github.com';
const user = "kochoa76"
const token = '87fed81a4ff8d038e913cce2d181f22a000c53a2'

function getToken() {
  return '';
}

  function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}


function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById("results").innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`;

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
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
