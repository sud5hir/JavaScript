let numbers1 = [1, 2, 3];
let sum = numbers1.reduceRight((acc, curr) => {
    console.log("accumulator");
    console.log(acc);
    console.log(curr);
    return acc + curr;
});

console.log(sum);


const numbers = [175, 50, 25];
numbers.reduce(myFunc);
function myFunc(total, num) {

    return total - num;
}


let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 2,
    price: 20.99
}
];

let total = shoppingCart.reduce(function (acc, curr) {

    return acc + curr.qty * curr.price;
});

console.log(total);