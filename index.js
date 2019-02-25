function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const path = `https://api.github.com/repos/` + `${repo}` + '/forks';
  fetch(path, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
}

function createIssue() {
  const repo = `kylekinnear/js-ajax-fetch-lab`
  const path = 'https://api.github.com/repos/' + `${repo}` + '/issues'
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(path, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res =>res.json())
  .then(json => getIssues())
}

function getIssues() {
  const repo = `kylekinnear/js-ajax-fetch-lab`
  const path = 'https://api.github.com/repos/' + `${repo}` + '/issues'
  fetch(path, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}
