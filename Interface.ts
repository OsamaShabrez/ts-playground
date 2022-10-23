type Point = {
    x: number,
    y: number
};

const coord: Point = { x: 1, y: 2 }
// ---
interface Coordinate {
    x: number,
    y: number
};

let p: Coordinate = { x: 1, y: 2};
// ---
interface Person {
    readonly id: number,
    name: string,
    age: number,
    experience?: number
}

const os: Person = {
    id: 1,
    name: "Osama",
    age: 25,
    // exp is optional
    printHello: () => {
        return "Hello, Osama!";
    },
    printHi: () => {
        return "Hello, Osama!";
    }
}
// os.id = 2; // error
// ---
interface Person {
    printHello: () => string,
    printHi(): string
}
// adds to the previous interface and code above compiles to js successfully
// ---
// extending TS interfaces
interface Student extends Person {
    school: "CS" | "MS" | "BH";
}

const js: Student = {
    id: 5,
    name: "John S.",
    age: 18,
    printHello: () => {return "Hello";},
    printHi: () => {return "Hi";},
    school: "CS"
}