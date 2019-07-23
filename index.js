const baseURL = 'https://api.github.com';
const user = 'stefclaus';

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  //return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}



function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
  json.html_url
}</a>`;

}

//In showResults, write code to display a link to the forked repo url
//(json.html_url). Append this link to the results div.



function createIssue() {
  //POST /repos/:owner/:repo/issues
   const repo = 'js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${user}/${repo}/issues`;

  const postData = {
  title:document.getElementById('title').value,
  body:document.getElementById('body').value}

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues(json));

  //use this function to create an issue based on the values input in index.html
}

//After the issue is created, fetch and display a list of all issues associated
//with your repository on the page. Append them to the issues div.


function getIssues() {
  const repo = 'js-ajax-fetch-lab'
  const url = `${baseURL}/repos/${user}/${repo}/issues`
  const req = new XMLHttpRequest();
   req.addEventListener('load', displayIssues);
  // req.open('GET', url);
  // req.send();
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })

  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function displayIssues(){
  const issues = JSON.parse(this.responseText);
  const issuesList = `<ul>${issues
      .map(
        issue =>
          '<li><strong>' +
          issue.title  +
          '</li>'
      )
      .join('')}</ul>`;
  document.getElementById('issues').innerHTML = issuesList;

}
