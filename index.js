// import { fork } from "child_process";

const token = '';
const postData = { body: 'using fetch to comment ON A COMMIT' };

// fetch(
//   'https://api.github.com/repos/dropheaven/toy_app/commits/38bc297dfa9a4425bc51f055a57e6156408150e2/comments', 
//   { 
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//       Authorization: `token ${token}`
//     }
//   }
// ).then(json => console.log(json));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    `https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(json => console.log(json));
}

// forkRepo();



function showResults(json) {
  console.log(json)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  // document.body.innerHTML = `<h1>${issueTitle}</h1><p>${issueBody}</p>`
  const url = "https://api.github.com/repos/dropheaven/js-ajax-fetch-lab/issues";

  fetch( url,
    {
      method: 'POST',
      title: issueTitle,
      body: issueBody,
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(response => response.json())
   .then(response => console.log(response))
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const url = "https://api.github.com/repos/dropheaven/js-ajax-fetch-lab/issues";
  fetch(url)
   .then(response => response.json())
   .then(response => console.log(response));
}

getIssues();
