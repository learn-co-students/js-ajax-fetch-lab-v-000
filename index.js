
const postData = {
  body: 'Great stuff'
};

function getIssues() {
  var repo = 'srolandmarshall/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`,{
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
    }).then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  $("#issues").html('<ul>')
  if (!json[0]){
    $("#issues").html('No issues.')
  }else{
  json.forEach(function(issue){
    $("#issues").append(`
        <li><a href='${issue.url}'>${issue.title}</a></li>
      `)
  })
  $("#issues").append('</ul>')}
}

function createIssue() {
  const title = $("#title").val()
  const body = $("#body").val()
  const post = {title: title, body: body};
  var repo = 'srolandmarshall/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`,{
    method: "post",
    body: JSON.stringify(post),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res=>console.log(res))
  .then(getIssues())
}

function showResults(json) {
  $('#results').html(`<a href='${json.html_url}'>Repo</a>`);
}

function forkRepo() {
  var repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '137a57b6e4857ba3ac06a625e6b85414b2e80dfd';
}
