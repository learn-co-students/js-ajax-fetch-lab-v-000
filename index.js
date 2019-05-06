const token = '';
const username = 'FionaDL'

//fetch('https://api.github.com/user/repos', {
//  headers: {
//    Authorization: `token ${token}`
//  }
//})
//  .then(res => res.json())
//  .then(json => console.log(json));




function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/'+'learn-co-curriculum/js-ajax-fetch-lab' + '/forks';
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
  //use fetch to fork it!
  }

  function showResults(json) {
    document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
      json.html_url
    }</a>`;
  }

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  //GET /repos/:owner/:repo/issues
  const repo = 'https://api.github.com/repos/' + `${username}` + '/js-ajax-fetch-lab' + '/issues';
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value
    const info = {title: title, body: body}
  fetch(repo, {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'https://api.github.com/repos/' + `${username}` + '/js-ajax-fetch-lab' + '/issues';
  fetch(repo, {
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
  //use fetch to fork it!
}

function showIssues(json) {
  document.getElementById('issues').append(json)
}



//9a91f795ad182740463331e07cf2ab7e09a03e07
