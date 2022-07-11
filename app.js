//Book Class: Represents a Book
class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI Class: Handles UI Tasks
class UI{
    static dispalyBooks(){
        const storedBooks = [
            {
                title:'Think and Grow',
                author:'Napoleon hill',
                isbn:'6969696'
            },
            {
                title:'Rich Dad Poor Dad',
                author:'Robert Kiyosaki',
                isbn:'420024'
            }
        ]

        const books = storedBooks

        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book){
        const bookList = document.getElementById('book-list')

        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        bookList.appendChild(row)
    }

    static deleteBook(e){
        if (e.classList.contains('delete')) {
            e.parentElement.parentElement.remove()
        }
    }

    static clearFields(){
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''  
        document.getElementById('isbn').value = ''
    }

}

//Store Class: Handling Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.dispalyBooks())

//Event: Add A Book
document.getElementById('book-form').addEventListener('submit', (e)=>{

    //Get form values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    //Creating a new book
    const book = new Book(title,author,isbn)
    
    //Adding Book To UI
    UI.addBookToList(book)

    //Clear fields
    UI.clearFields()
})

//Event: Remove Book
document.getElementById('book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
})
