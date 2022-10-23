interface Library {
    name: string,
    books: Book[]
}

const printLibraryBooks = (lib: Library) => {
    console.log(lib.name);
    lib.books.forEach(book => {
        console.log(book.name + " : " + book.isbn);        
    });
}

const cityLibrary: Library = {
    name: "City Library",
    books: [
        {
            name: "1st Book",
            isbn: 1234
        },
        {
            name: "Another Book",
            isbn: 4567
        }
    ]
}

printLibraryBooks(cityLibrary);