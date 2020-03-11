/*global fetch*/

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(json => console.log(json));

// Output
/*

[
  ({ id: 1, title: "Sample title1", body: "Sample Body1" },
  ...
  { id: 100, title: "Sample title100", body: "Sample Body100" })
];

*/
//Write your javascript logic here

let posts = document.getElementById('posts');
let loading = document.getElementById('loading');
let selectUserName = document.getElementById('selectUserName');
const textBelowDropDown = document.getElementById('text');
fetch("https://5e68646fd426c00016b7cf4e.mockapi.io/api/v1/users")
  .then(response => response.json())
  .then(json => { allNamesInUsers(json); })

loading.style.display = 'none';
textBelowDropDown.style.display = 'flex';

function allNamesInUsers(json) {
  let intiallyBlankUserName = document.createElement('option');
  intiallyBlankUserName.textContent = '';
  intiallyBlankUserName.value = 0;
  selectUserName.appendChild(intiallyBlankUserName);
  json.forEach((jsonObject) => {
    let listOfnames = document.createElement('option');
    listOfnames.textContent = jsonObject.name;
    listOfnames.value = jsonObject.userId;
    selectUserName.appendChild(listOfnames);
  });
}

selectUserName.onchange = () => {
  let divs = document.getElementsByClassName('main-div');
  [...divs].forEach((item) => {
    //  console.log(item);
    posts.removeChild(item);
  });
  loading.style.display = 'flex';
  textBelowDropDown.style.display = 'none';
  fetch("https://5e68646fd426c00016b7cf4e.mockapi.io/api/v1/users/" + `${selectUserName.value}` + "/posts")
    .then(response => response.json())
    .then(json => { loadPosts(json); });
};

function loadPosts(json) {
  json.forEach((json) => {
    const mainDiv = document.createElement('div');
    const title = document.createElement('h3');
    const body = document.createElement('p');
    const comments = document.createElement('p');

    mainDiv.className = 'main-div';
    comments.className = 'comments';

    title.innerHTML = json.title;
    body.innerHTML = json.body;
    comments.innerHTML = `${json.noOfComments} Comments`;

    mainDiv.appendChild(title);
    mainDiv.appendChild(body);
    mainDiv.appendChild(comments);
    posts.appendChild(mainDiv);

    textBelowDropDown.style.display = 'none';
    loading.style.display = 'none';
  });

}
