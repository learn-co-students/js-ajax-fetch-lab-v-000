function getIssues() {
  const token = getToken();
  fetch(`https://api.github.com/repos/MHirschberger/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function showIssues(json) {
  const issues = json.parse(this.responseText)
  const issueList = '<ul>' + issues.map(i => {
    return (`
          <li>
            <h2>${i.title}</h2>
            <p>${i.body}</p>
          </li>`
          )
  }).join('') + '</ul>'
  document.getElementById("results").innerHTML = repoList
}

function createIssue() {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const content = {
    title: title,
    body: body
  }
  const token = getToken();
  fetch(`https://api.github.com/repos/MHirschberger/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify(content)
  }).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  const repos = json.parse(this.responseText)
  const repoList = '<ul>' + repos.map(r => {
    return (`
          <li>
            <h2><a href="${r.html_url}">${r.name}</a></h2>
            <p>Watchers: ${r.watchers_count}</p>
            <p>Forks: ${r.forks_count}</p>
            <p>Issues: ${r.open_issues_count}</p>
          </li>`
          )
  }).join('') + '</ul>'
  document.getElementById("results").innerHTML = repoList
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })//.then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return '2f75e379b2d5e0939e945d829d61a4fe58d94c45'
  return ''
}
