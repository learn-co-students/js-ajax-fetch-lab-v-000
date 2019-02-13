function getToken() {
    //change to your token to run in browser, but set
    //back to '' before committing so all tests pass
    return '';
}

function getRootURL() {
    return 'https://api.github.com/repos/';
}

function getOwnerRepo(owner) {
    return `${owner}/js-ajax-fetch-lab`;
}

function getRepoToForkURL() {
    return getRootURL() + getOwnerRepo('learn-co-curriculum') + '/forks'
}

function getIssuesURL() {
    return getRootURL() + getOwnerRepo('emanao') + '/issues'
}

function forkRepo() {
    //use fetch to fork it!
    fetch(getRepoToForkURL(), {
            method: 'POST',
            headers: {
                Authorization: `token ${getToken()}`
            }
        })
        .then(res => res.json())
        .then(json => showResults(json));
}

function showResults(json) {
    //use this function to display the results from forking via the API
    const response = json.html_url
    document.getElementById("results").innerHTML =
        `<a href = ${response}> ${response} </a>`;
}

function createIssue() {
    //use this function to create an issue based on the values input in index.html
    const postData = {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value
    }
    fetch(getIssuesURL(), {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            Authorization: `token ${getToken()}`
        }
    }).then(res => getIssues());
}

function getIssues() {
    //once an issue is submitted, fetch all open issues to see the issues you are creating
    fetch(getIssuesURL(), {
            method: 'GET',
            headers: {
                Authorization: `token ${getToken()}`
            }
        }).then(res => res.json())
        .then(json => showIssues(json));
}

function showIssues(json) {
    console.log(json)
    var issuesTemplate = Handlebars.compile(document.getElementById("issue-template").innerHTML);
    var issuesHTML = issuesTemplate(json);
    document.getElementById("issues").innerHTML += `<ul> ${issuesHTML}</ul>`

}
