function getIssues(data) {
  fetch(`https://api.github.com/repos/jljardon/javascript-fetch-lab/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function showIssues(json) {
  $('#issues').append(issue.template())
}

function createIssue() {
  const token = '';
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  fetch(`https://api.github.com/repos/jljardon/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify({title: title, body: body}),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => {
    console.log(response);
    let repo = `<h3>Success!</h3><a href="${response.url}"> ${response.url}</a>`
     $('#results').html(repo)
  });
}



function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = '';


  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(response => {
    console.log(response);
    let repo = `<h3>Success!</h3><a href="${response.url}"> ${response.url}</a>`
     $('#results').html(repo)
  });
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
