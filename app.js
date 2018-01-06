const bookList = document.querySelector('#book-list');

const deleteElements = bookList.querySelectorAll('li .delete');
console.log('deleteElements: ', deleteElements);

deleteElements.forEach((node) => {
  
  node.addEventListener('click', (e) => {
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
  })
})

