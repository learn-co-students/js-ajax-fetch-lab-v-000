function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'a11e27677045d49003ef5855b36af26a6a705c61';
  return token;
  //return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  //const token = getToken();
  //debugger
  // const postData = {
  //   body: 'Great stuff'
  // };
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
      	"Authorization": `token ${getToken()}`
      }
    }
  ).then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //debugger
    result_link = '<ul><li><a href="' + json.html_url + '">' + json.name + '</a></li></ul>'
   document.getElementById('results').innerHTML = result_link;
  //use this function to display the results from forking via the API
}

function createIssue() {
  //debugger
  const title = document.getElementById('title').value;
  const text = document.getElementById('body').value;
  const postData = {
      title: title,
      body: text
    };

    fetch(
      'https://api.github.com/repos/anukhambete/js-ajax-fetch-lab/issues',
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          Authorization: `token ${getToken()}`
        }
      }
    ).then(res => res.json())
      .then(json => getIssues());
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //debugger
  //let url = json.repository_url;
  fetch(
    'https://api.github.com/repos/anukhambete/js-ajax-fetch-lab/issues',
    {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(json => {
    let issues = json;
    var issuesList =
    '<ul>' +
    issues.map(r => {
        return `<li><p>Title: ${r.title}</p>
			                 <p>Body: ${r.body}</p>
                </li>`;
      })
      .join('') +
    '</ul>';
    document.getElementById('issues').innerHTML = issuesList;
  });

  // GET /repos/:owner/:repo/issues
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
