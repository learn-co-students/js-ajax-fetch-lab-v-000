const baseURL = 'https://api.github.com';
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const token = getToken(); 
  const postData = {
    body: 'Great stuff'
  };
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => console.log(res));
}

function showResults(json) {
  const token = getToken(); 
  return json.html_url; 
}

function createIssue() {
  const token = getToken(); 

  //use this function to create an issue based on the values input in index.html
  const postData = {
    body: 'Great stuff'
  };
  
  fetch(
    'https://api.github.com/repos/christianavdm/js-ajax-fetch-lab/issues',
    {
      method: 'POST',
      body: {
        "title": "Testing",
        "body": "API",
      }
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => console.log(res));

}

function getIssues() {
  const token = getToken(); 

  //once an issue is submitted, fetch all open issues to see the issues you are creating
}