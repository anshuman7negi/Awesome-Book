const bookDetails =[];

function reciveData() {
    const reciveBooks=localStorage.getItem('booksData');
    if(reciveBooks) {
        const books=JSON.parse(reciveBooks);
        console.log(books.length)
        console.log(books);
        const bookStore=document.getElementById('allBooks');
        for(let i = 0;i < books.length; i++) {
            bookStore.innerHTML += `<div id="book${i}" class="book-store">
                                     <p>${books[i].book}</p>
                                     <p>${books[i].author}</p>
                                     <button onclick="removeBook("${i}")">remove</button>
                                     <hr>
                                     </div>`
        }
    }
}

function storeData() {
   localStorage.setItem('booksData', JSON.stringify(bookDetails));
   reciveData();
}

document.getElementById('addBook').addEventListener('click', ()=> {
    const book=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    bookDetails.push({book:book,author:author});
    storeData();
});


reciveData();
