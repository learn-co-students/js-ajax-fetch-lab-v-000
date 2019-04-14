function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  let token = '985eb6c8f57c4c30f6f4634d6e1d063cc3da70d6';

fetch(`https://api.github.com/repos/${repo}/forks`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));

  token = getToken();
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log("json: ",json);

  const repolink = `<a href=${json.html_url}>`+json.name+'</a>';

  document.getElementById('results').innerHTML = repolink;

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'Joeycho/js-ajax-fetch-lab';
  let token = '985eb6c8f57c4c30f6f4634d6e1d063cc3da70d6';
  const postData = {
  title: title.value,
  body: body.value
  };

  console.log("title: ",title.value);

fetch(`https://api.github.com/repos/${repo}/issues`,
  {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log("json after create issue:",json))
  .then(getIssues());

  token = getToken();
}

function getIssues() {

  //GET /repos/:owner/:repo/issues

  //use this function to create an issue based on the values input in index.html
  const repo = 'Joeycho/js-ajax-fetch-lab';
  let token = '985eb6c8f57c4c30f6f4634d6e1d063cc3da70d6';

fetch(`https://api.github.com/repos/${repo}/issues`,
  {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json =>showIssues(json));

  token = getToken();

  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function showIssues(json){
  const issuelist = `<ul>${json
     .map(
       j =>
         '<li>'+
         `<a href=${j.url}>`+
         j.title+`</a>`+
         '</li>'
     )
     .join('')}</ul>`;

  document.getElementById('issues').innerHTML = issuelist;
}
