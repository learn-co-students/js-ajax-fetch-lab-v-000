function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  // const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
    token = getToken()
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(res => showResults(res))

  //use fetch to fork it!
}

function showResults(json) {
    const repoLink = '<a href="' + json.html_url + '">' + ` ${json.html_url} </a>`
  document.getElementById('results').innerHTML = repoLink
}
  //use this function to display the results from forking via the API


function createIssue() {
    token = getToken()
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(
    'https://api.github.com/repos/inkanimal/js-ajax-fetch-lab/issues',
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(res => {
    getIssues()
    })
}
  //use this function to create an issue based on the values input in index.html


function getIssues() {
  token = getToken()

  const issues = fetch(
    'https://api.github.com/repos/inkanimal/js-ajax-fetch-lab/issues',
    {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(res => makeList(res))
   function makeList(res){
    const issueList =
        '<ul>' +
        res
          .map(issue => {
            return `
              <li>
                  <br>${issue.title}</b><br>
                  ${issue.body}
              </li>`;
          })
          .join('') +
        '</ul>';

    document.getElementById('issues').innerHTML = issueList
  }
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
