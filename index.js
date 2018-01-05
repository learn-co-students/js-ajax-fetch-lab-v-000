const userName = '';
const baseApi = 'https://api.github.com/';
const fork = `${userName}/javascript-fetch-lab`;

function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`).
      then(resp => {
        resp.json().then( data => {
          for (let i = 0; i < data.length; i++){
            displayIssue(new Issue(data[i]));
          }
        })
      })
}

function Repos(attributes) {
  this.url = attributes.url;
}

function createIssue() {
   const title = document.getElementById("title").value;
   const body = document.getElementById("body").value;
   const postData = { title: title, body: body };
   fetch(`${baseApi}repos/${fork}/issues`, {
     method: 'post',
     headers: {
       'Authorization': `token ${getToken()}`
     },
     body: JSON.stringify(postData)
   }).then(resp => getIssues())
}

function displayIssue(issue) {
  $('#issues').append(issue.template());
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`https://api.github.com/repos/${repo}`, {
  method: 'post',
  headers: {
    Authorization: `token`
  }
}).then(resp => resp.json()).then(json => console.log(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
