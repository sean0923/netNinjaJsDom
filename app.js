const forms = document.forms;
const addBook = forms['add-book'];

const bookList = document.querySelector('#book-list');
const ul = bookList.querySelector('ul');

ul.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    const li = e.target.parentElement;
    // ul.remove();
    li.remove();
    console.log('e.target: ', e.target);
  }
})

addBook.addEventListener('submit', e => {
	e.preventDefault();
	e.target.value;
	// const input = e.target.querySelector('input[type="text"]').value;
	const input = e.target.querySelector('input').value;

	ul.innerHTML += `<li>
    <span class="name"></span>
    <span class="delete">delete</span>
  </li>
  `;
  const lastEleChildSpan = ul.lastElementChild.querySelector('span');
  lastEleChildSpan.textContent = input;
  e.target.querySelector('input').value = ''
    
});
