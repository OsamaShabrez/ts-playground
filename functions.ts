function myFunc(num) { // num becomes any
    return num * 2;
}

myFunc(2);
myFunc("str");
myFunc(true);
// ---
function newFunc(num: number) { // num becomes any
    return num * 2;
}

newFunc(2);
newFunc("str"); // error
newFunc(true); // error

function sayHello(name: string) {
    return `Hello, ${name}!"`; // same as $"{x}" in c#
}

sayHello("Osama");
sayHello(true); // error
sayHello(2); // error
// ---
function defaultFunc(num: number = 2) {
    return 2 * 2;
}

defaultFunc(); // num automatically becomes 2
defaultFunc(5); // 10
defaultFunc("test"); // error
// ---
const wrongAddFunc = (x: number, y: number) : number => { // implicily declaring return type
    // error without a return body
}
// ---
const addFunc = (x: number, y: number) : number => {
    return x + y;
}
// return type ensures function return expected result type
// ---
// never return type where function is never suppose to return
function foreverLoop(): never { // games, menu?, heartbeat
    while(true) {
        // do nothing.. or something?
    }
}
function throwException(msg: string): never {
    throw(msg);
}
// ---
function unionReturnType(int: number) { // return type: string | boolean
    if (int < 10)
        return int.toString();
    else if (int > 50)
        return true;
    return false;
}
// never is not void, void is a return type, never never returns
// ---
function nmedFunction() {
}
const arrowFunction = () => {}
function anonFunc() {
    (() => {
        let anAnnonymousFunction = true;
    })();
}
let array = [1,2,3];
array.forEach(x => {
    // also annonymous function
    return x * 2;
})
// ---
