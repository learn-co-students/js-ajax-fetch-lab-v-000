function getIssues() {
  fetch(`https://api.github.com/repos/soheecho94/javascript-fetch-lab/issues`, {
    method: 'GET',
    headers: {
     	    Authorization: `token ${getToken()}`
     	  }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  $('#issues').html(`<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`)
}

function createIssue() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value
  const repo = 'soheecho94/javascript-fetch-lab'
  const postData = {title: title, body : body};
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
 	    Authorization: `token ${getToken()}`
 	  }
  }).then(res => getIssues()).then(res => console.log(res))
}

function showForkedRepo(json) {
  $('#results').html(`<h3>Forked Successfully!</h3>`)
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
 	    Authorization: `token ${getToken()}`
 	  }
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function getToken() {
  return ''
}
