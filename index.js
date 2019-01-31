const user = 'SaraGinsburg'
const url = 'api.github.com/repos/'


function getToken(){
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return '';
}

function forkRepo() {

  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${url}${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
   
};

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {

    const repo = '${user}/js-ajax-fetch-lab/issues'
    const postData = {title: document.getElementById('title').value, body: document.getElementById('body').value}

    fetch(`${url}${repo}`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
    }
  }).then(res => res.json());
}

function getIssues() {
  const repo = '${user}/js-ajax-fetch-lab/issues'

  fetch(`${url}${repo}`,
  {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
}
