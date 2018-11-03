const apiURL = `https://api.github.com`
const user = `asabogal`


function getToken() {
  return ``
  //********back to '' before committing so all tests pass*****~!!!!
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  let url = `${apiURL}/repos/${repo}/forks`
  fetch(url,
    {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
      }
    }).then(response => response.json())
      .then(json => showResults(json))
};

function showResults(json) {
  let forkLink = `<a href="${json.html_url}">${json.name}</a>`
  document.getElementById(`results`).innerHTML += forkLink
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`
  const url = `${apiURL}/repos/${repo}/issues`
  let issue = {
    title: document.getElementById(`title`).value,
    body: document.getElementById(`body`).value
  }

  fetch(url,
    {
      method: `POST`,
      body: JSON.stringify(issue),
      headers: {
        Authorization: `token ${getToken()}`
      }
  }).then(response => response.json())
    .then(json => getIssues())
}

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`
  const url = `${apiURL}/repos/${repo}/issues`
  fetch(url,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(response => response.json())
      .then(json => displayIssues(json))
};

function displayIssues(json){
  let issuesLi = json.map(issue => `<li>
    ${issue.title}
    </li>`
  ).join('')

  let issueList = `<ul> ${issuesLi} </ul>`
  document.getElementById(`issues`).innerHTML += issueList
};
