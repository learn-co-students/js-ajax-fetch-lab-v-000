// const baseURL = 'https://api.github.com';
// const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  // const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  // const url = `${baseURL}/repos/${repo}/forks`;

  //use fetch to fork it!
  fetch('https://api.github.com/repos/'+ repo +'/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
        }
      }).then(res =>res.json())
      .then(json =>showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let forkedUrl = `<a id="forked-repo" href="${json.html_url}">Forked Repo</a>`;
  document.getElementById('results').innHTML = forkedUrl;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  // let forkedrepolink = document.getElementById("forked-repo").href;
  let issueTitle = document.getElementById('title').value;
  let issueBody = document.getElementById('body').value;

  fetch('js-ajax-fetch-lab/issues',
      {
        method: 'POST',
        title: `${issueTitle}`,
        body: `${issueBody}`,
        headers: {
          Authorization: `token ${getToken()}`
          }
        }).then(res => console.log(res));


        // const repo = `${user}/js-ajax-fetch-lab`;
        // const url = `${baseURL}/repos/${repo}/issues`;
        // const postData = {
        //   title: document.getElementById('title').value,
        //   body: document.getElementById('body').value
        // };
        //
        // fetch(url, {
        //   method: 'POST',
        //   body: JSON.stringify(postData),
        //   headers: {
        //     Authorization: `token ${getToken()}`
        //   }
        // })
        //   .then(res => res.json())
        //   .then(json => getIssues());
    }

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch('js-ajax-fetch-lab/issues',
      {
        method: 'GET',
        headers: {
          Authorization: `token ${getToken()}`
          }
        }).then(res => res.json())
        // .then(json => addIssuesToHtml(json));
}
