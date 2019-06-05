function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass


  const token = '9d8cb2a068d9fd4191d1ddaefb8540eb4f74c4ea';

    fetch(`https://api.github.com/user/repos`, {
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(res => res.json())
      .then(json => console.log(json));
      return '9d8cb2a068d9fd4191d1ddaefb8540eb4f74c4ea';
}

function forkRepo() {
  // const repo = 'MDAM182/js-ajax-fetch-lab-v-000';
  // fetch(repo)
  // .then(resp => resp.json())
  // .then(json => console.log(json));
  // //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
