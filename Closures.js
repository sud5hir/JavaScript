function Customer() {
    //Encasulation hide the things
    var _customerName = "";
    var _cutomerId = "";
    var _validate = function () {
        alert("Validate");

    }
    var _dbConnect = function () {
        alert("_dbConnect");

    }
    //ABstraction : - Only neceesary thing
    return {
        customerName: _customerName,
        customerId: _cutomerId,
        validate: _validate,
        dbConnect: _dbConnect
    };
}

var cust = new Customer();
cust.cutomerId = "1";
cust.customerName = "A";
cust.validate();
cust.dbConnect();
//every functiuon calls want to maintain state

// //due to this keyword it's become global
// // window object 
// //how can access local variable name outside
// var a = "te";

// const testArrowFunction = (a) => {
//     this.a = a;
//     alert(this.a);
// }

// function testwithoutArrowFunction(a) {
//     this.a = a;
//     alert(this.a);
// }

// testArrowFunction("tr");
// withoutArrowFunction("ty");


// function ClosureTest() {

//     //globale object- globale pollution , it is not self contained and isloated
//     //this.name="A";
//     //this.code="1";

//     //private variable(no global polution problem) then how we can access outside  then create a closure
//     var name = "A";
//     var code = "1";

//     function GetName() {
//         return name;
//     }

//     function SetName(value) {
//         name = value;
//     }
//     return { SetName, GetName };
// }

// // stateful function, function inside a funtion
// var x = customer();
// x.SetName("B");
// alert(x.GetName());

// var y = customer();
// y.SetName("c");
// alert(y.GetName());

// //globale pollution , here variable becomes global
// console.log(this.name);
// console.log(name);
// console.log(window.name);
// alert(name);

