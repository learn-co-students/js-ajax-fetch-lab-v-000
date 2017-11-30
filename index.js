function getIssues() {
  // const userURL = $('#userURL')[0].innerHTML;
  const userURL = 'NickisKnowledge/javascript-fetch-lab';

  fetch(`https://api.github.com/repos/${userURL}/issues`
  ).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issues =
    `<ul>
      ${json.map(issue =>
        '<h3>' + issue.title + '</h3>' +
        '<p>' + 'Issue: ' + issue.body + '</p>' +
        '<p>' + 'Posted by: ' + issue.user.login + '</p>' +
        '------------------------------'
      )}
    </ul>`;

  $('#issues').html(`${issues}`);
}

function createIssue() {
  // const userURL = $('#userURL')[0].innerHTML;
  const userURL = 'NickisKnowledge/javascript-fetch-lab';

  const title = document.getElementById('title').value;

  const body = document.getElementById('body').value;

  const postData = {
    title: title,
    body: body,
  };

  fetch(`https://api.github.com/repos/${userURL}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => getIssues());
}

function showResults(json) {
  $('#results').html(`<a href=${json.html_url}>Repository</a>`);

  // added this to be able to pass user info around
  $('#userURL').text(json.full_name);

  $('#userURL').hide();
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  // return 'YOUR_TOKEN_HERE';
  return '';
}
