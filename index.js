const token = '';
 
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

function getToken() {
  return '';
}

function forkRepo() {

  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }  
  })
  .then(res => res.json())
  .then(res => showResults(res)) 
}

function showResults(json) {
  return document.getElementById('results').innerHTML = "<a href=" + 'json.html_url' + ">" + `${json.html_url}` + "</a>";
}

function createIssue() {

  const issueData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  

  fetch('https://api.github.com/repos/stazman/js-ajax-fetch-lab/issues', {
    method: 'POST',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }  
  })
  .then(res => res.json())
  .then(json => getIssues())
}

function getIssues() {
  fetch('https://api.github.com/repos/stazman/js-ajax-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())  
  .then(json => console.log(json))
}
