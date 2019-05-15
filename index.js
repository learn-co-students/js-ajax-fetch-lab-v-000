function getToken() {
  // had to remove token for Authorization so it doesn't upload to github
  // const token = x
  // return token
  return '';
}

function forkRepo() {
  token = getToken()
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(res => showResults(res))
}

function showResults(json) {
  const repoLink = '<a href="' + json.html_url + '">' + ` ${json.html_url} </a>`
  document.getElementById('results').innerHTML = repoLink
}

function createIssue() {

  token = getToken()
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(
    'https://api.github.com/repos/harleyharl/js-ajax-fetch-lab/issues',
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(res => {
    getIssues()
    })
}

function getIssues() {
  token = getToken()

  const issues = fetch(
    'https://api.github.com/repos/harleyharl/js-ajax-fetch-lab/issues',
    {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
  .then(res => makeList(res))

  function makeList(res){
    const issueList =
        '<ul>' +
        res
          .map(issue => {
            return `
              <li>
                  <br>${issue.title}</b><br>
                  ${issue.body}
              </li>`;
          })
          .join('') +
        '</ul>';

    document.getElementById('issues').innerHTML = issueList
  }

}
