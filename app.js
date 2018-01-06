const bookList = document.querySelector('#book-list')

const header = bookList.previousElementSibling;
console.log('header: ', header);
const form = bookList.nextElementSibling;
console.log('form: ', form);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> yeah ~'