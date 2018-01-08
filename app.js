const forms = document.forms;
const addBook = forms['add-book'];

const bookList = document.querySelector('#book-list');
const ul = bookList.querySelector('ul');

// remove list
ul.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    const li = e.target.parentElement;
    li.remove();
    console.log('e.target: ', e.target);
  }
})

// add book list
addBook.addEventListener('submit', e => {
  // prevent default refreshing
  e.preventDefault();

  // getInputValue
  const inputField = e.target.querySelector('input[type="text"')
  const inputValue = inputField.value;

  // create li span span tag
  const li = document.createElement('li');
  const nameSpan = document.createElement('span');
  nameSpan.classList.add('name');
  nameSpan.textContent = inputValue;
  const deleteSpan = document.createElement('span');
  deleteSpan.textContent = 'delete';
  deleteSpan.classList.add('delete');

  li.appendChild(nameSpan);
  li.appendChild(deleteSpan);

  ul.appendChild(li);

  // clear input field
  inputField.value = '';

});
