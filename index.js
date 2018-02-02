const username = ``
 const baseApi = `https://api.github.com`
 const repo = `learn-co-curriculum/javascript-fetch-lab`
 const fork = `${username}/javascript-fetch-lab`

 class Repo {
   constructor(json) {
     this.url = json.html_url
   }

   template() {
     return `<h3>Forked Successfully!</h3><a href="${this.url}">${this.url}</a>`
   }
 }

 class Issue {
   constructor(json) {
     this.title = json.title
     this.body = json.body
     this.login = json.user.login
   }

   template() {
     return `<h5>Login: ${this.login}</h5><br><h5>Title: ${this.title}</h5><h6>Body: ${this.body}</h6><br>`
   }
 }



 // GET /repos/:owner/:repo/issues
 function getIssues() {
   fetch(`${baseApi}/repos/${fork}/issues`)
      .then((response) => {
        return response.json()
      }).then((json) => {
        showIssues(json)
      });
}

function showIssues(json) {
  for (var i = 0; i < json.length; i++) {
     console.log(json[i]);
     const currentIssue = new Issue(json[i])
     console.log(currentIssue);
     document.getElementById('issues').innerHTML += currentIssue.template()
   }
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
   const issueBody = document.getElementById('body').value

   const postData = JSON.stringify({title: issueTitle, body: issueBody})

   fetch(`${baseApi}/repos/${fork}/issues`, {
     method: 'post',
     headers: {
       Authorization: `token ${getToken()}`
     },
     body: postData
   }).then((response) => {
     return response.json()
   }).then((json) => {
     getIssues()
   })
}



function forkRepo() {
  //use fetch to fork it!
  fetch(`${baseApi}/repos/${repo}/forks`, {
     method: 'post',
     headers: {
       Authorization: `token ${getToken()}`
     }
   }).then((response) => {
     return response.json()
   }).then((json) => {
     console.log(json);
     const repo = new Repo(json)
     showResults(repo)
   });
 }

 function showResults(repoObj) {
   document.getElementById('results').innerHTML = repoObj.template()
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
