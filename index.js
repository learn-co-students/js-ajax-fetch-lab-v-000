function getToken() {
  return '';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => showResults(json))
  //use fetch to fork it!
  
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.querySelector('#results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'Hector-Ariceaga/js-ajax-fetch-lab';
  const postData = {
    title: `${document.getElementById('title').value}`,
    body:`${document.getElementById('body').value}`
  }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => getIssues(json))
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'Hector-Ariceaga/js-ajax-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => displayIssues(json))

  function displayIssues(json) {
    document.getElementById('issues').innerHTML =
    `<ol reversed>
    ${json.map(issue => `<li>${issue.title}<br>${issue.body}<br><br></li>`).join('')}
    </ul>`
  }
  



}

