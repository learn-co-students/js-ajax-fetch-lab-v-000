const forkedRepo = "https://github.com/PetyaDjanovska/js-ajax-fetch-lab/issues"

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  return "";
}

function forkRepo() {
  const repo = "learn-co-curriculum/js-ajax-fetch-lab";
  token = getToken();
  //use fetch to fork it!
  fetch(
    `https://api.github.com/repos/${repo}/forks`,{
      method: "POST",
      dataType: "json",
      headers: {
        Authorization: `token ${token}` 
      }
    }
  ).then(res => res.json()).then(res => {
    console.log(res);
    showResults(res)});
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json.html_url);
  $("#results").html(`<a href=${json.html_url}>${json.html_url}</a>`);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let title = document.getElementById('title').value; // jQuery selector not passing the test WHY? $('#title').val()
  let body = document.getElementById('body').value;
  let issue = {
    title: title,
    body: body
  };

  fetch(
    forkedRepo,{
      method: "POST",
      headers: {
        Authorization: `token ${getToken()}` 
      },
      body: JSON.stringify(issue)
    }).then(res => res.json()).then(getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(
    forkedRepo,{
      method: "GET",
      headers: {
        Authorization: `token ${getToken()}` 
      }
    }).then(res => displayIssues(res));
}

function displayIssues(issues) {
  issues.forEach(i => {
    $("#issues").append(`<li><h2>i.title</h2></br><p>i.body</p></li>`)
  });
}