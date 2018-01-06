// let titles = document.getElementsByClassName('title');

// [...titles].forEach((title) => {
//   console.log('title: ', title);
// })

// let wiseMan = document.querySelector('#book-list li:nth-child(2) .name')
// console.log('wiseMan: ', wiseMan);

// let allNames = document.querySelectorAll('#book-list .name')
// console.log('allNames: ', allNames);

// [...allNames].forEach((name) => {
//   console.log('name: ', name);
// });

// console.log('allNames: ', Array.isArray(allNames));
// console.log('allNames: ', allNames);
// let getByClassName = document.getElementsByClassName('name');
// console.log('getByClassName: ', getByClassName);

let allNames = document.querySelectorAll('#book-list li .name');
console.log('allNames: ', allNames);

allNames.forEach((name) => {
  name.textContent +=' (yeah)'
})

let bookListId = document.querySelector('#book-list');
console.log('bookListId: ', bookListId);

bookListId.innerHTML += '<h2> yeah </h2>'

