const token = '01a0b82fb3b645a59225c0092c2bf572b6686fab';


function getIssues() {
	fetch(`https://api.github.com/repos/lizzie92869/javascript-fetch-lab/issues`)
   .then(resp => resp.json())
   debugger
   .then(resp => showIssues())
}

function showIssues(json) {
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
