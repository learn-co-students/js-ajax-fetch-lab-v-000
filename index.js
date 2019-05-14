function getToken() {
  return '';
}

function forkRepo() {
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', 
      {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
        
      }
    }
  ).then(fork => fork.json())
  .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
}

function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch('https://api.github.com/repos/mmelmer/js-ajax-fetch-lab/issues', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues())

}

function getIssues() {
  fetch('https://api.github.com/repos/mmelmer/js-ajax-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}
