const bookList = document.querySelector('#book-list');

const unorderedList = bookList.querySelector('ul');


unorderedList.addEventListener('click', (e) => {
console.log('e.target.className: ', e.target.className);
  if (e.target.className = 'delete') {
    const li = e.target.parentElement;
    unorderedList.removeChild(li);
  }
})



