const forms = document.forms
console.log('forms: ', forms);
const addBook = forms['add-book'];
console.log('addBook: ', addBook);

addBook.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.value
  // const input = e.target.querySelector('input[type="text"]').value;
  const input = e.target.querySelector('input').value;
})


