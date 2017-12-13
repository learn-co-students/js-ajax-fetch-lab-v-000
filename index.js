function getIssues() {
  const repo = 'johanesteves/javascript-fetch-lab';
  const token = getToken();

  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => {
    debugger;
    resp.json().then( data => {
      for (let i = 0; i < data.length; i++){
        displayIssue(new Issue(data[i]));
      }
    } )
  })
}

function showIssues(json) {
  debugger;
  let url = json.url;

  document.getElementById('div').innerHTML = url
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const postData = { title: title, body: body };

  const repo = 'johanesteves/javascript-fetch-lab';
  const token = getToken();

  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify(postData)
  }).then(res => console.log(res));
}

function showResults(json) {
  let url = json.url;

  document.getElementById('results').innerHTML = url
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const token = getToken();

  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => { showResults(res)});

}

function getToken() {
  const TOKEN = '';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return TOKEN
}
