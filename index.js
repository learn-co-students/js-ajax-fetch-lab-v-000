function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab'; 
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method:'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  //debugger;
  //use this function to display the results from forking via the API
  $('#results').html(createLink(json));
}

function createLink(json){
  return `<a href=${json.html_url}> Your Fork </a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issue = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }

  fetch(
    `https://api.github.com/repos/aubreyneimeier/js-ajax-fetch-lab/issues`, 
    {
      method: "POST",
      body: JSON.stringify(issue),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  getIssues()
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/aubreyneimeier/js-ajax-fetch-lab/issues`,{
    headers: {
      Authorization: `token ${getToken()}`
    }
    })
    .then(issues => issues.json())
    .then(json => showIssues(json))   
}

function showIssues(json){
  //debugger;
  $("#issues").html(createIssues(json));
}

function createIssues(json){
  return json.map(issue => 
  `${issue.title} : ${issue.body} <br> `)
}

// .then(json => showIssues(json))