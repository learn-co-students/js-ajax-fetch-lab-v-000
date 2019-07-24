const baseURL = 'https://api.github.com';
const user = 'mfeinLearn';

function getToken() {

  const token = 'YOUR_TOKEN_HERE';

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return '';
  return '';

}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!

  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        //Authorization: `token `
        Authorization: `token `
        //Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json));


}

function showResults(json) {
  //use this function to display the results from forking via the API
//debugger

//return $('div#results');
document.getElementById("results").innerHTML = `<a href= ${json.html_url}></a>`
//json.html_url

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const postData = {
    body: document.getElementById('body').value,
    title: document.getElementById('title').value
  };
  fetch(
    `https://api.github.com/repos/mfeinLearn/js-ajax-fetch-lab/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        //Authorization: `token `
        //Authorization: `token ${getToken()}`
        Authorization: `token `
      }
    }
  ).then(res => res.json())
  .then(json => getIssues());

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating

  fetch(
    `https://api.github.com/repos/mfeinLearn/js-ajax-fetch-lab/issues`,
    {
      headers: {
        //Authorization: `token `
        Authorization: `token `
        //Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => console.log(json));
}
