"use strict";
const printLibraryBooks = (lib) => {
    console.log(lib.name);
    lib.books.forEach(book => {
        console.log(book.name + " : " + book.isbn);
    });
};
const cityLibrary = {
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
};
printLibraryBooks(cityLibrary);
