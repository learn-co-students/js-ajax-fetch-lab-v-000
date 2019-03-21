function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  let data = {
    body: `${repo}`
  };
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `token ${getToken()}`
      }
    
    }).then(response => response.json())
    .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  // debugger;
  let results = document.getElementById('results')
  results.innerHTML += `<a href="${json.html_url}">${json.name}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let url = 'https://github.com/mrjak13/js-ajax-fetch-lab/issues'
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  let titleData = {
    title: `${title}`
  }

  let bodyData = {
    body: `${body}`
  }
  // debugger;
  fetch(`${url}`,
    {
      method: 'POST',
      title: JSON.stringify(titleData),
      body: JSON.stringify(bodyData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(getIssues())
  
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  let url = 'https://github.com/mrjak13/js-ajax-fetch-lab/issues'
  debugger;
  fetch(`${url}`, {
  headers: {
    Authorization: `token ${getToken()}`
  }
})
}
