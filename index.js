function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  let token = "bce01512b629755e6f146fd1a8bc1ffa3fbcf2da"
    fetch(`https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(res => res.json())
      .then(json => console.log( json  ));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
    let token = "bce01512b629755e6f146fd1a8bc1ffa3fbcf2da"
    fetch(`https://api.github.com/repos/Naomi-Dennis/js-ajax-fetch-lab/issues`, {
      method: 'POST',
      body: "test body",
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(res => res.json())
      .then(json => console.log( json  ));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
    let token = "bce01512b629755e6f146fd1a8bc1ffa3fbcf2da"
    fetch(`https://api.github.com/repos/Naomi-Dennis/js-ajax-fetch-lab/issues`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(res => res.json())
      .then(json => console.log( json  ));
  
}
