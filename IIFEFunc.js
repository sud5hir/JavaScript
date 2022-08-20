(function () {
    var a = b = 5;
})();
//console.log(a);
console.log(b);

console.log(2 + 5 + "8");

console.log(+true); //output:1
console.log(!'Lydia'); //output:false



var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function () {
            console.log("inner func:  this.foo = " + this);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//Tweo Function Tests

function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}
console.log("foo1 returns:");
console.log(foo1().bar);
console.log("foo2 returns:");
console.log(foo2());

//String Number



console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);



let person = {
    name: 'John Doe',
    getName: function () {
        console.log(this.name);
    }
};
let x = person.getName;
x();
let f = x.bind(person);
f();

setTimeout(x, 1000);
setTimeout(function () {
    person.getName();
}, 1000);


// name collosion issue will get avoided
// it helps to do initilization
//anonymopus
var iffeeNampeSpace = function () {
 
    //local function
    (
        function TestIFFE() {
            var name = "A";
            var code = "1";

            function GetName() {
                return name;
            }

            function SetName(value) {
                name = value;
            }
            return { SetName, GetName };
        })
return { TestIFFE }
}();

var x1 = new iffeeNampeSpace();

(x1.SetName("c"));

alert(x1.GetName());

//  var TestIFFE = "";
// name collosion issue, it is not consuctor, if you will not give name then name collosion will not happen
//var x = new TestIFFE();

//IFFEE
(function () {
    alert("hello");
})();


// name collosion issue will get avoided
// it helps to do initilization
//anonymopus
var iffeeNampeSpace = function () {
 
    //local function
    (
        function TestIFFE() {
            var name = "A";
            var code = "1";

            function GetName() {
                return name;
            }

            function SetName(value) {
                name = value;
            }
            return { SetName, GetName };
        })
return { TestIFFE }
}();

var x1 = new iffeeNampeSpace();

(x1.SetName("c"));

alert(x1.GetName());

//  var TestIFFE = "";
// name collosion issue, it is not consuctor, if you will not give name then name collosion will not happen
//var x = new TestIFFE();

//IFFEE
(function () {
    alert("hello");
})();