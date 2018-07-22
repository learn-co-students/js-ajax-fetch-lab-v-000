const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/js-ajax-fetch-lab-v-000`
const reps = 'learn-co-curriculum/javascript-fetch-lab'
  let repo = `${baseApi}repos/${reps}/forks`
  const forked = `${baseApi}repos/${fork}`


  function forkRepo() {
    fetch(`https://api.github.com/repos/${reps}/forks`, {
      method: 'post',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(res => res.json(showForkedRepo(repo))).then(json => console.log(json));
  }

  function Repo(repo){
    return `<h3>Forked Successfully!<a href="${baseApi}repos/${reps}"> ${baseApi}repos/${reps}</a>`
  };

  function showForkedRepo(repo) {
  $("#results").html(Repo(repo))
  }

  function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    return ''
  }

function getIssues() {
fetch(`https://api.github.com/repos/javascript-fetch-lab/issues`, {
}).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
    $("#issues").html(json)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = {title: title, body: body}
  fetch(`https://api.github.com/repos/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
        headers: {
          Authorization: `token ${getToken()}`
        }
  }).then(res => res.json()).then(json => console.log(json));
  }


function showResults(json) {
}
