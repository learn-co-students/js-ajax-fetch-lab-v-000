function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  // return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
   
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      name: 'efkarst',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
    ).then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML += `<a href=${json['html_url']}>${json['html_url']}</a><br>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'efkarst/js-ajax-fetch-lab';
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
    ).then(res => res.json())
    .then(json => console.log(json));

  getIssues()
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'efkarst/js-ajax-fetch-lab';
   
  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
    ).then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json[3])
  var i;
  for (i = 0; i < json.length; i++) { 
    document.getElementById('issues').innerHTML += `<a href=${json[i]['html_url']}>${json[i]['title']}</a><br>`;
  } 
}


