console.log("I am here!")

var addBook = document.querySelector('#add-book')
var title = document.querySelector('#title')
var author = document.querySelector('#author')
var dateRead = document.querySelector('#dateread')
var addedBook = document.querySelector('#response')

function addABook(event) {
    event.preventDefault(); 
    console.log(event)
    var response = "Title: " + title.value  +  "  Author: " + author.value;
    console.log(title.value, author.value)
    addedBook.textContent = response; 
    // console.log(response)

}

addBook.addEventListener("click", addABook)