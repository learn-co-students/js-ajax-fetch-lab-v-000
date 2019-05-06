const token = '38bff705e50db04834416bffe1b63bd3301f1a68';

const baseURL = "https://api.github.com/";

const userName = 'barbchoy';

// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//   .then(res => res.json())
//   .then(json => console.log(json));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}`+ 'repos/' + repo + '/forks';

  fetch(url,{
      headers: {
        Authorization: `token ${token}`
      },
      method: "POST"
  })
    .then(res => res.json())
    .then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${userName}` + '/js-ajax-fetch-lab'
  const url = `${baseURL}` + 'repos/' + repo + '/issues';

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const postData = {
    title: title,
    body: body
  }

  fetch(url,{
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }

  })
    .then(res => res.json())
    .then(json => getIssues());

}

function getIssues() {
  const repo = 'repos/' + `${userName}` + '/js-ajax-fetch-lab/issues' ;
  const url = `${baseURL}` + repo;


    fetch(url,{
        headers: {
          Authorization: `token ${token}`
        }
    })
      .then(res => res.json())
      .then(json => console.log(json));
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
