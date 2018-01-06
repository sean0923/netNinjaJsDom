const bookList = document.querySelector('#book-list');

const deleteElements = bookList.querySelectorAll('li .delete');
console.log('deleteElements: ', deleteElements);

deleteElements.forEach((node) => {
  
  node.addEventListener('click', (e) => {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
  })
})

const bookAroma = document.querySelector('#page-banner .title');
bookAroma.innerHTML += '<a href="https://www.google.com"> google </a>'

const aTag = document.querySelector('a');
console.log('aTag: ', aTag);

aTag.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('e.target.href: ', e.target.href);
})

