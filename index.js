function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`
}

function createIssue() {
  const repo = 'fkmccallion/js-ajax-fetch-lab';
  const token = getToken()
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const postData = {
    title: `${title}`,
    body: `${body}`
  };

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues(json));
}

function getIssues() {
  const repo = 'fkmccallion/js-ajax-fetch-lab';
  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(resp => resp.json())
  .then(json => console.log(json))
}
