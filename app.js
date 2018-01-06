const bookList = document.querySelector('#book-list')
console.log('bookList: ', bookList);

bookList.parentElement
console.log('bookList.parentElement: ', bookList.parentElement.parentNode);
console.log('bookList.parentNode: ', bookList.parentNode.parentElement);

console.log('bookList.childNodes: ', bookList.childNodes);
console.log('bookList.children: ', bookList.children);