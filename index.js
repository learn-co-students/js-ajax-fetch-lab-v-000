function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}

function forkRepo() {
  const token = "";
  const repo = "learn-co-curriculum/js-ajax-fetch-lab";
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let resultsContainer = document.querySelector("#results");
  resultsContainer.innerHTML += `<a href="${json.html_url}"></a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const token = "";
  const repo = "js-ajax-fetch-lab";
  const owner = "peterckim";
  const postData = {
    title: document.querySelector("#title").value,
    body: document.querySelector("#body").value
  };

  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  const token = "";
  const repo = `js-ajax-fetch-lab`;
  const owner = `peterckim`;
  fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
