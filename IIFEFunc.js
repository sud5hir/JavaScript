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
