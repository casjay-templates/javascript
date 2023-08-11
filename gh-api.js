/**
 * @class       : gh-api
 * @author      : Jason (casjaysdev@casjay.pro)
 * @created     : Thursday Jul 23, 2020 19:22:45 EDT
 * @description : gh-api
 */

 // GitHub API URL
 const url = 'https://api.github.com/repos/onhealth/memes/contents/images';

// create an element
const createNode = (elem) => {
  return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
  parent.appendChild(elem);
}

// List Element
const ul = document.querySelector('#users');

// make the API call
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    // iterate over users
    data.map((user) => {
      // create the elements
      let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
      img.src = user.download_url;
      span.innerText = user.name;
      // append all elements
      appendNode(li, img);
      appendNode(li, span);
      appendNode(ul, li);
    });
  }).catch(err => {
    console.error('Error: ', err);
  });
