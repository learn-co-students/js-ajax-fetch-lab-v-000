const name = "adam-barton"

function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    return '';
}

function forkRepo() {
    const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
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
    fetch(`https://api.github.com/repos/${name}/js-ajax-fetch-lab/issues`, {
        method: 'POST',
        body: JSON.stringify(issueFields),
        headers: {
            authorization: `token ${getToken()}`
        }
    }).then(response => response.json()).then(json => getIssues())
}
https: //github.com/adam-barton/js-ajax-fetch-lab-v-000/issues
    function getIssues() {
        //once an issue is submitted, fetch all open issues to see the issues you are creating
        fetch(`https://api.github.com/repos/${name}/js-ajax-fetch-lab/issues`, {
            headers: {
                authorization: `token ${getToken()}`
            }
        }).then(response => response.json()).then(json => console.log(json))
    }