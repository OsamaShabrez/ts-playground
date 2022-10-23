enum Answer {
    Yes,
    No,
    Cancel
} // each gets assigned a number

let userAnswer = Answer.Yes;
// let anotherAnswer: Answer = "No"; // error
// ---
enum WithValue {
    X = 100,
    Y = 200,
    Z = 500
} // also acceptable to map something
// ---
enum WithStr {
    Yes = "YES",
    No = "NO"
} // ok
// ---
