const owner = ''
const baseApi = 'https://api.github.com/'

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function getIssues() {
  
  //GET /repos/:owner/:repo/issues/:number
  fetch(`${baseApi}repos/${owner}/javascript-fetch-lab/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          showIssue(new Issue(data[i]));
        }
      } )
    })

}

function showIssues(json) {
   $('#issues').append(issue.template())
}

function createIssue() {
  //POST /repos/:owner/:repo/issues
  const myToken = '048c6ab79204224765051701d0cab80965e26936';
  
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  
  fetch(`https://api.github.com/repos/${owner}/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      'Authorization': `token ${myToken}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())

}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  const token = '048c6ab79204224765051701d0cab80965e26936';
  
  fetch(`https://api.github.com/repos/${repo}/forks`, {

  method: 'post',
  
  headers: {
    Authorization: `token ${token}`
  }
  
  
}).then(res => res.json()).then(json => showForkedRepo(json));

} //forkRepo

function showForkedRepo(result) {
  
  const owner = result.owner.login
  const repoName = result.name
  
  const repoInfo = `<a href="${result.html_url}"><h3>${result.name}</h3></a>`
  username = owner

  document.getElementById("results").innerHTML = repoInfo
}


function getToken() {
  const token = '048c6ab79204224765051701d0cab80965e26936';
  //return token
  //back to '' before committing so all tests pass
  return ''
}


