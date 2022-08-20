//  Normal Function Vs Arrow Func

let calulate = function (a, b) {
    console.log(`calulate Normal Func assgn :-> + ${a + b}`);
}

calulate(5, 3);

let calulateArrow = (a, b) => console.log(`calulate Arrow Func assgn :-> + ${a + b}`);

calulate(5, 5);


console.log("---------------------------------------------------");
console.log("-------------------This in Arrow --------------------------------");

//This keyword Binding

var normalFunctionObject = {
    thisOfNormalFunc: function () {
        console.log(this);//object obj1 
    }
}

var arrowFunctionObject = {
    thisOfArrowFunc: () => {
        console.log(this);// window/global object
    }
}

normalFunctionObject.thisOfNormalFunc()

arrowFunctionObject.thisOfArrowFunc()


console.log("---------------------------------------------------");
console.log("-------------------getThisofFuncAssgn--------------------------------");

var thisInArrowVsFunc = {
    getThisofFuncAssgn: function () {

        console.log("getThisofFuncAssgn At Object Level : ->", this);

        const getThisOfFuntionInsideFuncAssgn = function () {
            console.log("---------------------------------------------------");

            console.log("getThisOfFuntionInsideFuncAssgn : ->", this)

        };

        getThisOfFuntionInsideFuncAssgn();

        const getThisOfArrowFuntionInsideFuncAssgn = () => {
            console.log("---------------------------------------------------");

            console.log("getThisOfArrowFuntionInsideFuncAssgn : -> ", this)

        };

        getThisOfArrowFuntionInsideFuncAssgn();
    }
};

thisInArrowVsFunc.getThisofFuncAssgn()



console.log("---------------------------------------------------");
console.log("---------------------thisInArrowFunc------------------------------");

var thisInArrowFunc = {

    getThisofArrowFunc: function () {

        console.log("getThisofFuncAssgn At Object Level : ->", this);

        const getThisOfFuntionInsideArrow = function () {
            console.log("---------------------------------------------------");

            console.log("getThisOfFuntionInsideArrow : ->", this)
        };

        getThisOfFuntionInsideArrow();

        const getThisOfFunAssgnFuntionInsideArrow = function () {
            console.log("---------------------------------------------------");

            console.log("getThisOfFunAssgnFuntionInsideArrow : -> ", this)

        };

        getThisOfFunAssgnFuntionInsideArrow();
    }
};

thisInArrowFunc.getThisofArrowFunc()

//normation function
function testmul(num) {
    return num * num;
}

console.log(testmul(10));

//function assignment
var multiply = function (num) {
    return num * num;
}

console.log(multiply(10));

var arrowMul = num => num * 2;

console.log(arrowMul(10));



var obj1 = {
    valueOfthis: function () {
        return this;
    }
}

var obj2 = {
    valofthisarrow: () => {
        return this;
    }
}

console.log(obj1.valueOfthis())//object obj1

console.log(obj2.valofthisarrow())// window/global object

// this inside arrow doenot bwlong to calling function
// this refers to calling function
//arrow function this belongs to window instead of calling obj

// USE ARROW FUNTION IF YOUU WANT TO EXCUTE FUNCTION
//IN CURRENT CONTEXT

var foo = {};
foo.someMethod = function () {
    alert(this);
}
foo.someMethod();

//you have a stand alone function, the this variable will be bound to the "global" object, almost always the window object in the context of a browser.
var foo = function () {
    alert(this);
}
foo();

//As a Constructor : belong to object

function Foo() {
    alert(this);
}

var myObject = new Foo();

const arrowFun = () => alert(this);
arrowFun();
