function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  
  return '';
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/`, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	} 
  }).then(res => res.json()).then(json => showResults(json));
// 

//repos/:owner/:repo/forks  

//'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const url = `https://api.github.com/repos/dannyenfp/js-ajax-fetch-lab/issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}    
    
function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const url = `https://api.github.com/repos/dannyenfp/js-ajax-fetch-lab/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

//b3_5 lol
