// let titles = document.getElementsByClassName('title');

// [...titles].forEach((title) => {
//   console.log('title: ', title);
// })

let wiseMan = document.querySelector('#book-list li:nth-child(2) .name')
console.log('wiseMan: ', wiseMan);

let allNames = document.querySelectorAll('#book-list .name')
console.log('allNames: ', allNames);

[...allNames].forEach((name) => {
  console.log('name: ', name);
});


