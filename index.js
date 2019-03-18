function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '';

  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const token = 'f1cfbaf72d7cc48b787fb639ad752316667a274b';
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
  {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  }
).then(res => res.json())
 .then(json => showResults(json))
  return '';
}

function showResults(json) {
  //use this function to display the results from forking via the API

document.getElementById('results').append(`${json.html_url}`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const token = 'f1cfbaf72d7cc48b787fb639ad752316667a274b';
  const postData = {
  title: document.getElementById('title').value,
  body: document.getElementById('body').value,
  };
  fetch('https://api.github.com/repos/salbonico/js-ajax-fetch-lab-v-000/issues',
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }
).then(res => res.json())
 .then(getIssues())
  return '';
}


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const token = 'f1cfbaf72d7cc48b787fb639ad752316667a274b';
  fetch('https://api.github.com/repos/salbonico/js-ajax-fetch-lab-v-000/issues',
  	{
    method: 'GET',
    headers: {
      Authorization: `token ${token}`
    }
	}
 ).then(res => res.json())
 .then(json => showResults(json))
 return '';
}

 function showResults(json) {
   //use this function to display the results from forking via the API
 let issues = json;
  const issuesList = `<ul>${issues
    .map( issue =>

        '<li><strong>' +
        issue.title +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('issues').innerHTML = issuesList;

 }
