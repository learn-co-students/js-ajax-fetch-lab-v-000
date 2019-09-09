const baseURL = 'https://api.github.com';
const user = 'kclunie';
const token = 'fb3d4de2524155bc92b86ccaa2260f20205888f9';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
    
  ).then(res => res.json())
  //.then(json => console.log(json))
  .then(json => showResults(json));

}

function showResults(json) {
  //use this function to display the results from forking via the API
  //json.html_url
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
    fetch(
      `${baseURL}/repos/${repo}/issues`,
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          Authorization: `token ${getToken()}`
        }
      }
      
    ).then(res => res.json())
    //.then(json => console.log(json.title))
    .then(json => getIssues());
  
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {
    //method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));

  //let html = "<ul>" + json.map(j => (
   // `</li><h4>${j.title}</h4><p>${j.number} :: <span id="body">${j.body} :: </span><a href="${j.url}">${j.url}</a></p></li>`
  //)).join('') + "</ul>";
  //document.querySelector('#issues').innerHTML = html;
  
}
