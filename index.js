const repo = 'learn-co-curriculum/javascript-fetch-lab'
let userRepo = 'javascript-fetch-lab'

function showForkedRepo(json){
  userRepo = json.full_name
  let link = `<a href="${json.html_url}">Repository Link</a>`
  document.querySelector("#results").innerHTML = link
}


function getIssues() {
  fetch(`https://api.github.com/repos/${userRepo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  let issueText = ""
  for(let i = 0; i < json.length; i++){
    issueText += `<strong>${json[i].title}</strong><br>${json[i].body}<br><a href="${json[i].html_url}">view on github</a><br><br>`
  }
  document.querySelector("#issues").innerHTML = issueText
  console.log(json)
}

function createIssue() {
  let issueTitle = document.querySelector("#title").value
  let issueText = document.querySelector("#body").value
  let postData = {
    title: issueTitle,
    body: issueText
  }

  fetch(`https://api.github.com/repos/${userRepo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    },
    method: "post",
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(json => getIssues());

}

function showResults(json) {
}

function forkRepo() {
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    headers: {
      Authorization: `token ${getToken()}`
    },
    method: "post"
  }).then(res => res.json()).then(json => showForkedRepo(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
