function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

   return '11982134a1f26680d710fdebd9c1b831ba6e5e6e';
  }

function forkRepo() {
  const repo = 'js-ajax-fetch-lab';
  const username = `learn-co-curriculum`
  //use fetch to fork it!

    const token = getToken();
    const postData = {
      body: 'Great stuff'
    };
    fetch(
    `https://api.github.com/repos/${username}/${repo}/forks`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => showResults(res.url));

}

function showResults(string) {
  //use this function to display the results from forking via the API
  //GET /repos/:owner/:repo/forks
  //debugger
  //fetch('https://api.github.com/repos/jquery/jquery/forks')
  //.then(resp => resp.json())
//  .then(json => document.getElementById("results").append(json));
  document.getElementById("results").append(string)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  // POST /repos/:owner/:repo/issues
  const token = '11982134a1f26680d710fdebd9c1b831ba6e5e6e';
  const username = `BrettSWeisberg`
  const repo = 'js-ajax-fetch-lab';

  const postData = {
    body: 'test body'
  };
  fetch(

  `https://api.github.com/repos/${username}/${repo}/issues`,
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }
).then(resp => resp.json())
  .then(res => getIssues());
}

function getIssues() {
  const owner = `BrettSWeisberg`
  const repo = 'js-ajax-fetch-lab';
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  // GET /repos/:owner/:repo/issues
  fetch(`https://api.github.com/${owner}/${repo}/issues`)
  .then(resp => resp.json())
  .then(json =>   document.getElementById("issues").append(json));
}
