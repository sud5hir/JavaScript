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
},
];
//Clone as shallow copy
let newshoppingCart = shoppingCart.slice();
shoppingCart[0].qty = 23;
console.log(newshoppingCart[0].qty);