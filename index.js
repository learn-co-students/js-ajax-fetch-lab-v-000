const name = ""
const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    return '';
}

function forkRepo() {

    fetch(`https://api.github.com/repos/${repo}/forks`, {
        method: 'POST',
        headers: {
            authorization: `token ${getToken()}`
        }
    }).then(response => response.json()).then(json => showResults(json))
}


function showResults(json) {
    //use this function to display the results from forking via the API
    console.log(json)
    resultDiv = document.getElementById('results').innerHTML = `<a href = "${json.html_url}" target = "blank">${json.full_name}</a>`

}

function createIssue() {
    //use this function to create an issue based on the values input in index.html
    const issueFields = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    };
    fetch(`https://api.github.com/${name}/${repo}/issues`, {
        method: 'POST',
        body: JSON.stringify(issueFields),
        headers: {
            authorization: `token ${getToken()}`
        }
    }).then(response => response.json()).then(json => getIssues())
}

function getIssues() {
    //once an issue is submitted, fetch all open issues to see the issues you are creating
    console.log("Hello")
}