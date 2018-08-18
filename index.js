const fork = 'https://github.com/alyssaswatson/javascript-fetch-lab'

function getIssues() {
  fetch(`${fork}/issues`, {
  })
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++){
        displayIssue(new Issue(data[i]));
      }
    });
}

function showIssues(json) {
  $("#issues").append(`<h4>Issues</h4><a href ="${json.html_url}">${json.title}</a>`)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
   const postData = {
    title : title,
    body : body
  }
   fetch(`${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
     body: JSON.stringify(postData)
  }).then(res => res.json()).then(json => getIssues())

}

function showResults(json) {
   $('#results').append(`<h4>Forked Successfully!</h4><a href="${json.url}">${json.full_name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!	  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`,{
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ''
  return token
}
