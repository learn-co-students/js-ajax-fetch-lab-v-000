function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/forks`

  fetch(url,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(response => response.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById("results").innerHTML = `<a id="issues" href="${json.html_url}">${json.html_url}</a>`;
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const url = `https://api.github.com/repos/sunyounghwang/js-ajax-fetch-lab/issues`
  const postData = { title: title, body: body };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => getIssues());
}

function getIssues() {
  const url = `https://api.github.com/repos/sunyounghwang/js-ajax-fetch-lab/issues`

  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));
}
