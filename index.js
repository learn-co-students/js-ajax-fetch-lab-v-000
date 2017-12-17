function getIssues() {
    fetch(`https://api.github.com/repos/anniezh12/javascript-fetch-lab/issues`).
    then(resp => resp.json()).
      then(json => { for(issue of json){ showIssues(json);}});

    }

function showIssues(json) {
  document.getElementById("issues").innerHTML = JSON.stringify(json);
}

function createIssue() {
  let user_github = 'anniezh12/javascript-fetch-lab';
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let issue = {title: title, body: body};
  //api.github.com\/repos\/learn-co-curriculum\/javascript-fetch-lab
fetch(`https://api.github.com/repos/${user_github}/issues`,
{
  method: 'post',
  body: JSON.stringify(issue),
  headers:{Authorization: `token ${getToken()}`}}).then(resp => getIssues());

}

function showForkedRepo(json) {
        let url = json.url;
        //$("#results").html = url;
        document.getElementById("results").innerHTML= `<a href= ${url}>Show</a>`;
        }

function forkRepo() {
        const repo = 'learn-co-curriculum/javascript-fetch-lab'
        //use fetch to fork it!
        fetch(`https://api.github.com/repos/${repo}/forks`,{method:'post', headers:{  Authorization:  `token ${getToken()}`}}).
        then(json => showForkedRepo(json));
          }

function getToken() {
        //change to your token to run in browser, but set
        //back to '' before committing so all tests pass
        const token = '';
        return token;
        }
