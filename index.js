const token = '';
 
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {

  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }  
  })
  .then(res => res.json())
  .then(res => showResults(res)) 
}

//using stazman's authorization code, it automatically used stazman's token as a way to fork the repo for stazman, even though it was not explicitly stated in the documentation for forking a repo through the GITHUB API. Beyond simple gets, and probably even for some of those, it takes more than just looking at one page, but rather understanding that beyond simple, authorized gets, that how to do something more complicated than that may not be explicitly stated, and GH has what I understand to be a relatively straightforward set of docs. It takes a lot of trial and error, but there may be some pattern to rely on among how different APIs work (and definitely no standardization :) 

function showResults(json) {
  return document.getElementById('results').innerHTML = "<a href=" + 'json.html_url' + ">" + `${json.html_url}` + "</a>";
  //use this function to display the results from forking via the API
}

function createIssue() {

  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  

  fetch('https://api.github.com/repos/stazman/js-ajax-fetch-lab/issues', {
    method: 'POST',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }  
  })
  .then(res => res.json())
  .then(json => getIssues())
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  fetch('https://api.github.com/repos/stazman/js-ajax-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())  
  .then(json => console.log(json))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
