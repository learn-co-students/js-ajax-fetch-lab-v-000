const base = "https://api.github.com"

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
//09b2ad94a672cbcfceb9388194b97dcb20fbd98a
function forkRepo() {

  fetch("https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks",
  {
    method: 'POST',
    headers: {
      Authorization: `token 09b2ad94a672cbcfceb9388194b97dcb20fbd98a`
    }
  }
).then(res => console.log(res));

}

function showResults(json) {
  //use this function to display the results from forking via the API
  const results = `<a href="${json.html_url}">${json.html_url}</a><br>`
  document.getElementById('results').innerHTML = results;

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  fetch("https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/issues",
  {
    method: 'POST',
    headers: {
      Authorization: `token 09b2ad94a672cbcfceb9388194b97dcb20fbd98a`
    },
    title: `${document.getElementById('title').value}`,
    body: `${document.getElementById('body').value}`
  }
).then(res => console.log(res));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
