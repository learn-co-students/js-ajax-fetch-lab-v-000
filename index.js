
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const token = getToken();
  fetch( 'https://api.github.com/repos/' + repo + '/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${ token }`
      }
    }
  ).then(res => res.json())
   .then(json => showResults(json));
}

function showResults(json) {
  let div = document.getElementById('results');
  div.append(document.createElement('a'));
  let link = document.getElementsByTagName('a')[1];
  link.setAttribute('href', json.html_url);
  link.innerHTML = json.name;
}

function createIssue() {
  const title = document.getElementById('title').value
  const text = document.getElementById('body').value
  const postData = {
    title: title,
    body: text
  }
  const repo = 'Freddymorato/js-ajax-fetch-lab';
  fetch( 'https://api.github.com/repos/' + repo + '/issues',
    {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function getIssues() {
  const repo = 'Freddymorato/js-ajax-fetch-lab';
  fetch( 'https://api.github.com/repos/' + repo + '/issues',
    {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => document.getElementById('#issues').append(json));
}
