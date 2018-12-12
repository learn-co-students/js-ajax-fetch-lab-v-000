const baseURL = 'https://api.github.com';
const user = 'SallyZ12'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '';

  return token;
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response=>response.json())
    .then(json=>showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML =
  `<a href= ${json.html_url}>${json.html_url}</a>`;
  console.log('showResults',json)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const postData = {title: document.getElementById('title').value,
  body:document.getElementById('body').value};

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response=>response.json())
  .then(json=>getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url,{
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response=>response.json())

    .then(json=>
      {document.getElementById('issues').innerHTML = "<ul>" + json.map(j =>
        `<li> ${j.title} <br>
         ${j.body}
         </li>`).join('') + "</ul>";
       });
}
