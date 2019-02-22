function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  const a = document.createElement('a');
  a.setAttribute('href', json.html_url);
  a.innerText = json.html_url;
  document.getElementById('results').appendChild(a);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'chrissygonzalez/js-ajax-fetch-lab';
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch(`https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json()).then(getIssues());
  // .then(json => console.log(json));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'chrissygonzalez/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`,
  {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
).then(res => res.json())
.then(json => showIssues(json));
}

function showIssues(json) {
  // console.log(json);
  let list = document.createElement('ul');
  json.forEach(function(j){
    // console.log(j)
    let item = document.createElement('li');
    item.innerText = `${j.title}: ${j.body}`
    list.appendChild(item);
  })
  document.getElementById('issues').appendChild(list);
}