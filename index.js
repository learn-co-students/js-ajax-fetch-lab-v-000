function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
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
    })
  .then(response => response.json())
  .then(response => showResults(response))
}

function showResults(json) {
  let repo_url = json.html_url
  document.getElementById("results").innerHTML = `<a href="${repo_url}">${json.name}</a>`
}

function createIssue() {

  const url = `https://api.github.com/repos/abourke09//js-ajax-fetch-lab/issues`;

  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }

  fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(response => response.json())
      .then(json => getIssues());

  //document.getElementById("issues").innerHTML += `<h4>${postData.title}</h4><p>${postData.body}</p>`
}

function getIssues() {
  const userRepo = 'abourke09/js-ajax-fetch-lab'
  fetch(`https://api.github.com/repos/${userRepo}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}
