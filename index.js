
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

//comment this out for the tests. "" only for tests

  return "" ;
  // return "";
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api/github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json=> showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
    document.getElementById("#results").html = `<a href="json.html_url">${json.html_url}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `https://api.github.com/repos/${repo}/issues`;
  const data = {
    title: document.getElementById("title").value,
    text: document.getElementById("body").value
  }
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json=> getIssues(json))
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `https://api.github.com/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json=> console.log(json))
}
