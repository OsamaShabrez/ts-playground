const cat = {
   name: "Magic",
   breed: "Persian",
   age: 12, 
}

function printCat(cat: {name: string, breed: string, age: number}) {
   console.log(`Name: ${cat.name}`);
   console.log(`Name: ${cat.breed}`);
   console.log(`Name: ${cat.age}`);
}

printCat({name: "NewCat", breed: "some breed", age: 1});
// ---
const personFunc = ({name: string, age: number}) => {
}

personFunc({name: "John", age: 25});
personFunc({age: 15, name: "Teen"}) // also ok
// personFunc({name: "John", age: 25, experience: 5}); // error - inline must match the object definition
let OS = {name: "Osama", age: 25, experience: 5};
let TS = {name: "Thomas S.", experience: 10, isProgrammer: false, age: 30};
personFunc(OS); // works - TS extracts required fields and ignore the rest
personFunc(TS); // also works - order is not important
// ---
let coordinates: {x: number, y: number} = {x: 1, y: 1}; // inline objects
// ---
const point = (x: number, y: number): {x: number, y: number} => {
   return {x, y};
}
// ---
type ContactNumber = {
   code: number,
   no: number
}
type Person = {
   name: string,
   age: number,
   mobile: ContactNumber 
}
type Book = {
   title: string,
   isbn: number
   author: Person,
}

let myBook: Book = {
   title: "My First Book",
   isbn: 123,
   author: {
      name: "Osama",
      age: 30,
      mobile: {
         code: 123,
         no: 56789
      }
   }
}

const printBook = (b: Book) => {
   console.log(b.author.name); // prints author name Osama
}
// ---
type Optional = {
   a: number,
   b?: number
}
let op1: Optional = {a: 1}; // correct
let op2: Optional = {a: 2, b: 2}; // also correct
// ---
type User = {
   readonly id: number,
   name: string
}

let usr: User = {
   id: 1,
   name: "Hello"
}
// usr.id = 2; // error
// ---
