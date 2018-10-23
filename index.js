function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '';
  return '84fb3dd05c2a6d0606268109b28f5d40a91b6438';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  $('#results').html(`<a href="${json.html_url}"> ${json.html_url}</a>`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const parameters = {
    title: $('input#title').val(),
    text: $('input#text').val()
  };

  fetch(`https://api.github.com/repos/sarastanton/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(parameters),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues(json));
}

function getIssues(json) {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  // debugger
  const issues = json.map(issue => `<li><p><strong> Title: </strong> ${issue.title}</p> <p><strong> Issue: </strong> ${issue.body} </p></li>`);
  $('#issues').html(`<ul> ${issues} </ul>`)
}
