//Var Let Const :

//Global Scope: - >

let a = 1;
console.log(a);
a = 'sd';
console.log(a);
var varItem1 = 1;
let letItem2 = 2;
const constItem3 = 3;

console.log("GloballyAccessVariables -> varItem1: ->" + varItem1);
console.log("GloballyAccessVariables -> letItem2: ->" + letItem2)
console.log("GloballyAccessVariables -> constItem3: ->" + constItem3)

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");
var varItem4 = 4;
let letItem5 = 5;
const constItem6 = 6;

function AccessGlobalVariablesInFunction() {
    console.log("AccessGlobalVariablesInFunction -> varItem4: ->" + varItem4);
    console.log("AccessGlobalVariablesInFunction -> letItem5: ->" + letItem5)
    console.log("AccessGlobalVariablesInFunction -> constItem6: ->" + constItem6)
}

AccessGlobalVariablesInFunction();

//Var belongs to window object bt getting error - > To Check

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

//console.log(window.varItem4);
//Consta and let not Belong to window object
//console.log(window.letItem5);
//console.log(window.constItem6);


//Function Scope : ->


function AccessFunctionVariablesInFunction() {
    var varItem7 = 7;
    let letItem8 = 8;
    const constItem9 = 9;
    console.log("AccessFunctionVariablesInFunction -> varItem7: ->" + varItem7);
    console.log("AccessFunctionVariablesInFunction -> letItem8: ->" + letItem8)
    console.log("AccessFunctionVariablesInFunction -> constItem9: ->" + constItem9)
}

AccessFunctionVariablesInFunction();

//Cannot access outside functions :

//console.log("AccessFunctionVariablesOutsideFunction -> varItem7:->" + varItem7);
//console.log("AccessFunctionVariablesOutsideFunction-> letItem8:->" + letItem8)
//console.log("AccessFunctionVariablesOutsideFunction-> constItem9:->" + constItem9)

//Concept of Hiosting in Functional Scope : - >

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

var HiostingItem1 = 1;

function outer() {
    console.log("outer without assignment -> HiostingWithVarItem1: ->" + HiostingItem1); // undefined
    var HiostingItem1 = 2;
    function inner() {
        console.log("without assignment inner -> HiostingWithVarItem1: ->" + HiostingItem1);//undefined
        HiostingItem1++;
        console.log("without assignment inner with increment -> HiostingWithVarItem1: ->" + HiostingItem1++);//NaN
        var HiostingItem1 = 3;
        console.log("after assignment inner -> HiostingWithVarItem1: ->" + HiostingItem1);//3
    }
    inner();
}
outer();

//console.log("---------------------------------------------------");
//console.log("---------------------------------------------------");

// we will get error variable not defined hioting is not alowed in let and const
// let HiostingItem1 = 1;

// function outer() {
//     console.log(HiostingItem1); // undefined
//     let HiostingItem1 = 2;
//     function inner() {
//         console.log(HiostingItem1);//undefined
//         HiostingItem1++;
//         console.log(HiostingItem1++);//NaN
//         let HiostingItem1 = 3;
//         console.log(HiostingItem1);//3
//     }
//     inner();
// }
// outer();

//Block Level :- >

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

{
    var VarArray = [1, 2, 3];
    console.log("VarArray Access Inside block : ->" + VarArray);
}
console.log("VarArray Access Outside block : ->" + VarArray);

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

{
    let letArray = [1, 2, 3];
    console.log("letArray Access Inside block : ->" + letArray);
}


console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

{
    const constArray = [1, 2, 3];
    console.log("constArray Access Inside block : ->" + constArray);
}

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

//console.log("letArray Access Outside block : ->" + letArray);
//console.log("constArray Access Outside block : ->" + constArray);

//With ForLoop

for (var varItem = 0; varItem < 2; varItem++) {
    console.log("varItem inside for loop : - >" + varItem);
}

console.log("varItem Outside for loop : - >" + varItem);

for (let letItem = 0; letItem < 2; letItem++) {
    console.log("letItem inside for loop : - >" + letItem);
}

//console.log("letItem Outside for loop : - >" + letItem);

// for (const constItem = 0; constItem < 2; constItem++) {
//     console.log("constItem inside for loop : - >" + constItem);
// }


//Redeclaration Scope :

var redeclareVarItem = 2;
console.log("redeclareVarItem : -> " + redeclareVarItem);
redeclareVarItem = 5;
console.log("redeclareVarItem again : -> " + redeclareVarItem);

let redeclareLetItem = 7;
console.log("redeclareLetItem : -> " + redeclareLetItem);
redeclareLetItem = 9;
console.log("redeclareLetItem again : -> " + redeclareLetItem);

const redeclareconstItem = 7;
console.log("redeclareconstItem : -> " + redeclareconstItem);
redeclareconstItem = 9;
console.log("redeclareconstItem again : -> " + redeclareconstItem);

//Block Level Test
{
    var a1 = 10;
}
{
    let b1 = 20;
    b1 = "S";
    console.log(b1);
}
{
    const c1 = 15;
}

// //Var behaves like a global scope
// document.getElementById("var").innerHTML = a1;
// //cannot access outside , it's throw error
// document.getElementById("let").innerHTML = b1;
// document.getElementById("const").innerHTML = c1;

//Global Level

var a11 = 10;
let b11 = 20;
const c11 = 15;
console.log(a11);
console.log(b11);
document.getElementById("const").innerHTML = c11;

function testVarLetConst() {
    document.getElementById("var").innerHTML = a11;
    document.getElementById("let").innerHTML = b11;
    document.getElementById("const").innerHTML = c11;
}
document.getElementById("var").innerHTML = window.a11;
// Variable declare in global scope with let and const, are not part of window object
//returns undefiend
document.getElementById("let").innerHTML = window.b11;
document.getElementById("const").innerHTML = window.c11;

//Function Level Scope..

function test() {
    var a = 10;
    let b = 10;
}
// cannot access outside because var is function scopr
console.log(a);
console.log(b);