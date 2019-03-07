//PAT: 6cc540d78aff56af70f63f242fe05373fb7c697d
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //const token = '6cc540d78aff56af70f63f242fe05373fb7c697d'
  //return token;
  //To get tests to run un-comment the return value.
  return '';
}
//{
//    method: 'POST',
//    body: JSON.stringify(postData),
//    headers: {
//      Authorization: `token ${token}`
//    }
//  }
const ownerRepo = 'jackW50/js-ajax-fetch-lab'

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  //https://api.github.com/user/repos
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(showResults);
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json);
  //write code to display in a link to the forked repo url(json.html_url)
  document.getElementById('results').innerHTML = '<a data-owner="' + json.owner.login + '"'
  + 'data-repo="' + json.name + '"'
  + 'href="' + json.html_url + '" >' + json.html_url + '</a>';
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const titleData = document.getElementById('title').value;
  const bodyData = document.getElementById('body').value;
  const issueData = {
    title: titleData,
    message: bodyData
  };
  //const owner = document.querySelector('a[data-owner]').dataset.owner;
  //const repo = document.querySelector('a[data-owner]').dataset.repo;

  fetch('https://api.github.com/repos/' + ownerRepo + '/issues', {
    method: 'POST',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(getIssues);
}

function getIssues(json) {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  console.log('In getIssues');
  //const owner = document.querySelector('a[data-owner]').dataset.owner;
  //const repo = document.querySelector('a[data-owner]').dataset.repo;
  //GET /repos/:owner/:repo/issues
  fetch(`https://api.github.com/repos/${ownerRepo}/issues`, {
    headers: {
      Authorization: `token(${getToken()})`
    }
  }).then(res => res.json()).then(displayIssues);
}

function displayIssues(json) {
  const issueDiv = document.getElementById('issues');
  
  issueDiv.innerHTML = '<ul>' + json.map(eachIssue).join('') + '</ul>'

}

function eachIssue(issue) {
  return `<li> ${issue.title}  --Status:  ${issue.state} </li>`
}
