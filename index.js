const baseURL = 'https://api.github.com';
const user = 'carolgreene';


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}



function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';  //set repo var to repo address we are getting
  const url = `${baseURL}/repos/${repo}/forks`;           //set url var to git hub repo address for forking this repo
  //use fetch to fork it!
fetch(url, {                                   //fetch url. could have just put in the whole address instead of the var
  method: 'POST',                             //use POST bc we're creating a fork
  headers: {
    Authorization: `token ${getToken()}`          //using a token for authorization & getting it from function above
  }
})
.then(res => res.json())                         //take results and show as json
.then(json => showResults(json))                 //take json & send it to showResults(json) function below
}


function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
   //grab the results div & set equal to link to the json.html_url
 }


function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;                    //set repo var to repo address we are getting
  const url = `${baseURL}/repos/${repo}/issues`;              //set url var to git hub repo address for repo issues
  const title = document.getElementById('title').value;      //grab title value & set to var
  const body = document.getElementById('body').value;         //grab body value & set to var

  fetch(url, {                                             //fetch the url
    method: 'POST',                                       //use POST bc we are creating an issue
    title: JSON.stringify(title),                         //pass title as a json string
    body: JSON.stringify(body),                           //pass body as a json string
    headers: {
      Authorization: `token ${getToken()}`                //use token to authorize & get from getToken function above
    }
  })
  .then(res => res.json())                              //take results & show as json
  .then(json => getIssues())                            //take json & pass to getIssues() function below
}



function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
 const repo = `${user}/js-ajax-fetch-lab`;             //set repo var to repo address we are getting
 const url = `${baseURL}/repos/${repo}/issues`;        //set url var to git hub repo address for repo issues
 fetch(url, {                                          //fetch the url
   headers: {
     Authorization: `token ${getToken()}`              //use token to authorize & get from getToken function above
   }
 })
 .then(res => res.json())                              //take results & show as json
 .then(json => console.log(json))                       //take json & console.log it
}
