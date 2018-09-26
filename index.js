function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';

}


function forkRepo() {
  const repo = 'js-ajax-fetch-lab';
  const userName = 'learn-co-curriculum';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${userName}/${repo}/forks`,
      {
          method: 'post',
          headers: {
              Authorization: `token ${getToken()}`
          }
})
    .then(resp => resp.json())
    .then(json => showResults(json));
}

function showResults(forks) {
  //use this function to display the results from forking via the API
  let resultsDiv = document.getElementById('results');
  let str = `<h2>Forked by ${forks.owner.login}</h2>`;
  resultsDiv.insertAdjacentHTML( 'beforeend', str );


}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'js-ajax-fetch-lab';
  const userName = 'zacwillmington';
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  const data = {
      body: "test body"
      //`Issue Title: ${title} issue body: ${body}`
  };

  debugger;

  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
          Authorization: `token ${getToken()}`
      }
  })
  .then(resp => resp.json())
  .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const userName = 'learn-co-curriculum';
  const repo = 'js-ajax-fetch-lab';
  fetch(`https://api.github.com/${repo}/issues/`);

}
