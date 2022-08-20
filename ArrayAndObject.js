let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log("---------------------With person Object------------------------------");


console.log(person.firstName); // 'John'
console.log(person.lastName); // 'Doe'

let { firstName2, lastName } = person;

console.log("---------------------After Destructing------------------------------");

console.log(firstName2); // 'John'
console.log(lastName); // 'Doe'

console.log("---------------------With Alais------------------------------");

let { firstName: fname, lastName: lname } = person;

console.log(fname); // 'John'
console.log(lname); // 'Doe'

//console.log("---------------------middleName Not Defined------------------------------");

//let { firstName, lastName, middleName } = person;
//console.log(middleName); // undefined // error because first name already declared above

console.log("---------------------Default Value------------------------------");

//Default Value 

let personWithDefault = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName1, lastName1, middleName = '', currentAge: age = 18 } = personWithDefault;

console.log(middleName); // ''
console.log(age); // 28

console.log("---------------------Array------------------------------");
let awesomeArray = [1, 2, 3];
let [edu, var1, var2] = awesomeArray;
console.log(edu, var1, var2);

console.log("----------------0-----function------------------------------");

function getPerson() {
    return null;
}

//let { firstName: fname2, lastName: lname2 } = getPerson(); :- Error

let { firstName: fname2, lastName: lname2 } = getPerson() || {};

console.log(fname2, lname2);

console.log("----------------0-----function------------------------------");

function f() {
    return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

console.log("----------------Destructuring Returned Arrays------------------------------");

function runners() {
    return ["Sandra", "Ola", "Chi"];
}

var [a1, b1, c1] = runners();
console.log(a1); //Output: Sandra
console.log(b1); //Output: Ola
console.log(c1); //Output: Chi

[a1 = 40, b1 = 4] = [1];
console.log(a1); //Output: 1
console.log(b1); //Output: 23


let a2 = 1;
let b2 = 3;

console.log("----------------Swapping variables------------------------------");


[a2, b2] = [b2, a2];
console.log(a2); // 3
console.log(b2); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

console.log("----------------Extracting properties from nested objects variables------------------------------");
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
        city: 'Gotham'
    }
};

// Object destructuring:
const { address: { city } } = hero;
console.log(city);

var stringArray = ["one", "two", "three"];

        var numericArray = [1, 2, 3, 4];

        var decimalArray = [1.1, 1.2, 1.3];

        var booleanArray = [true, false, false, true];

        var mixedArray = [1, "two", "three", 4];
               var stringArray = new Array();
        stringArray[0] = "one";
        stringArray[1] = "two";
        stringArray[2] = "three";
        stringArray[3] = "four";

        var numericArray = new Array(3);
        numericArray[0] = 1;
        numericArray[1] = 2;
        numericArray[2] = 3;

        var mixedArray = new Array(1, "two", 3, "four");

        var students = [{
            name: "nitu",
            age: 21,
            gender: "F"
        },
        {
            name: "niya",
            age: 21,
            gender: "F"
        },
        {
            name: "Max",
            age: 15,
            gender: "M"
        },
        {
            name: "John",
            age: 20,
            gender: "M"
        },
        {
            name: "Tom",
            age: 25,
            gender: "M"
        },
        ]


        console.log(students.length);

        var stud;

        for (var i = 0; i < students.length; i++) {

            stud = students[i].gender;

            if (stud == "M")
            
                console.log("Male student:" + students[i].name);
        }