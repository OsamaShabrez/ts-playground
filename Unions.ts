function printAge(age: number | string)
{
    if (typeof age === "string")
    {
        age = parseInt(age);
    }
    console.log("Age: " + age);
}
printAge(30);
printAge("30");
// ---
const array: (number | string)[] = []; // array of ints and/or strings
const orArray: number[] | string[] = []; // array of either ints or strings
// ---
let answer: "yes" | "no" | "cancel";
answer = "yes"; // ok
answer = "no";  // ok
// answer = "what?"; // error
type RGB = [number, number, number]; // tuple
let red: RGB = [255, 0, 0];
red.push(255); // allowed
// ---
