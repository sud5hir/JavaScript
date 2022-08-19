function someFunction() {
    return arguments;
}

console.log(someFunction("joykare", 100, false));


function sum(a, ...theArgs) {
    let result = 0;
    for (let arg of theArgs)
        result += arg;
    return result;
}

console.log(sum(1, 2, 3));
// expected output: 6
console.log(sum(1, 2, 3, 4));

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one", "two", "three", "four", "five", "six")

///Quick reference
//A function definition can have only one ...restParam.

//foo(...one, ...wrong, ...wrong)
//Copy to Clipboard
//The rest parameter must be the last parameter in the function definition.

//foo(...wrong, arg2, arg3)
//Copy to Clipboard
//foo(arg1, arg2, ...correct)


function someFunction() {
    return arguments;
}

console.log(someFunction("joykare", 100, false));

const arr11 = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];
console.log(newArr);
const myNames = [...arr, "joykare"];
console.log(myNames);
const arr = [1, 2, 3];
const arr211 = [...arr];
console.log(arr2);

function add(a, b, c) {
    return a + b + c;
}
const args = [1, 2, 3];

console.log(add(...args));

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
console.log(arr1);

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

console.log(clonedObj);

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// Object { foo: "baz", x: 42, y: 13 }

function compare(a, b) {
    return a - b;
}

// to compare

let result = compare(...[1, 2]);
console.log(result); // -1


// to push

var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];
rivers.push(...moreRivers);

let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]