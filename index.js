function getToken() {
  return '';
}

function forkRepo() {
  let url = `https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`;

  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody }

  fetch(`https://api.github.com/repos/s-nicas/js-ajax-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => getIssues());
}

function getIssues() {
  fetch(`https://api.github.com/repos/s-nicas/js-ajax-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => res.json()).then(json => showIssues(json));
}
