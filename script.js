let bookDetails = [];

function reciveData() {
  const reciveBooks = localStorage.getItem('booksData');
  if (reciveBooks) {
    bookDetails = JSON.parse(reciveBooks);
    const bookStore = document.getElementById('allBooks');
    bookStore.innerHTML = '';
    for (let i = 0; i < bookDetails.length; i += 1) {
      bookStore.innerHTML += `<div id="book${i}" class="book-store">
                                     <p>${bookDetails[i].book}</p>
                                     <p>${bookDetails[i].author}</p>
                                     <button onclick="removeBook(${i})">remove</button>
                                     <hr>
                                     </div>`;
    }
  }
}

function storeData() {
  localStorage.setItem('booksData', JSON.stringify(bookDetails));
  reciveData();
}

document.getElementById('addBook').addEventListener('click', () => {
  const book = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  bookDetails.push({ book, author });
  storeData();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
/* eslint-disable no-unused-vars */
function removeBook(index) {
  bookDetails.splice(index, 1);
  storeData();
}
/* eslint-enable no-unused-vars */
reciveData();
