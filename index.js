const token = 'fff638a0b48b88d0a85b308fced68b0580241b4c';

function Issue(attributes){
  this.url = attributes.url;
  this.title = attributes.title;
  this.body = attributes.body;
}


function getIssues() {
	fetch(`https://api.github.com/repos/lizzie92869/javascript-fetch-lab/issues`)
   .then(resp => {
    resp.json()
    .then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
    } )
   })
}



Issue.prototype.template = function(){
   var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
};

function displayIssue(issue) {
  $('#issues').append(issue.template())
}


function createIssue() {

	//get the inputs to build an issues
	const title = $('#title')[0].value
	const text = $('#body')[0].value
	const postData = { title: title, body: text }
	// Create an instance of an issue
	// post it to the right address
	fetch(`https://api.github.com/repos/lizzie92869/javascript-fetch-lab/issues`, {
  	method: "post",
  	headers: {
     Authorization: `token ${token}`,
     Accept:"application/json"

   },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}







function Repo(attributes){
  this.url = attributes.url;
}


Repo.prototype.template = function(){
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
};


function showForkedRepo(json) {
	$(document).ready(function(){
		$('#results').append(json.template())
	});

}

function forkRepo() {
	 const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: "post",
  	headers: {
     Authorization: `token ${token}`,
     Accept:"application/json"
   }
  })
  .then(res => {
  	return res.json()
  }).then(res => {
  	let repo = new Repo(res);
    showForkedRepo(repo);
  })

}




function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
