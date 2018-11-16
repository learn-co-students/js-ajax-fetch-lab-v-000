function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = ''
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks/`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(res => res.json)
    .then(json => showResults(json))
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let result = `<a href=${json.html_url}>Fork Link</a>`
  document.getElementById('results').innerHTML += result
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  fetch(`https://api.github.com/repos/thekevinhuang/js-ajax-fetch-lab/issues/`,
    {
      method: 'POST',
      title: `${title}`,
      body: `${body}`,
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/thekevinhuang/js-ajax-fetch-lab/issues/`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res=>res.json())
    .then(json=>showIssues(json))
}

function showIssues(json) {
  result = json.map((item)=>`<li><h3>${item.title}</h3><p>${item.body}</p></li>`).join('')
  document.getElementById('issues').innerHTML += `<ul>${result}</ul>`
}
