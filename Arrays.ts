const emptyArray: [] = [];
// emptyArray.push(2); // error - array type is empty
// ---
const numbers: number[] = [1, 2, 3];
const emptyNos: number[] = []; // also fine
emptyNos.push(2); // ok
// emptyNos.push("no"); // error
// ---
const stringArray: Array<string> = []; // another way to declare arrays
const boolArray: Array<boolean> = [];
// ---