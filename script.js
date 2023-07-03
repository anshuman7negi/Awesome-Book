let bookDetails = [];


function storeData() {
  localStorage.setItem('booksData', JSON.stringify(bookDetails));
  reciveData();
}

function removeBook(index) {
  bookDetails.splice(index, 1);
  storeData();
}

document.getElementById('addBook').addEventListener('click', () => {
  const book = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (book !== '' && author !== '') {
    bookDetails.push({ book, author });
    storeData();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});

document.getElementById('allBooks').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const bookDiv = event.target.parentNode;
    const index = Array.from(bookDiv.parentNode.children).indexOf(bookDiv);
    removeBook(index);
  }
});

reciveData();
