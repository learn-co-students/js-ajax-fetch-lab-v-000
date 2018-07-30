function getIssues() {
  const repo='mrfarmer777/javascript-fetch-lab';
  fetch('https://api.github.com/repos/'+repo+'/issues')
    .then(handleErrors).then(res => res.json()).then(showIssues);
}

function showIssues(res) {
  $("#issues").html(res);
}

function createIssue() {
  const repo='mrfarmer777/javascript-fetch-lab';
  const title= document.getElementById("title").value;
  const body= document.getElementById("body").value;
  fetch('https://api.github.com/repos/'+repo+'/issues',{
    method:'post',
    title: title,
    body: body,
    headers: {
      Authorization: `token ${getToken}`
    }
  }).then(handleErrors);
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  const data = {
    
  };
  console.log("this updates");
  //use fetch to fork it!
  fetch("https://api.github.com/repos/"+repo+"/forks", {
    method: 'post',
    headers:{
      Authorization: `token ${getToken()}`
    }
  }).then(handleErrors).then(res=>res.json().then(json=>showForkedRepo(json)));
}

function handleErrors(res){
  if(!res.ok){
    throw Error(response.statusText);
  }
  console.log("Response ok");
  return res;
}

function showForkedRepo(res){
  console.log(res);
  $("#results").html(`<a href="${res.html_url}">${res.full_name}</a>`);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}