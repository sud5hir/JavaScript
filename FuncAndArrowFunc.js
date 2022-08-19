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