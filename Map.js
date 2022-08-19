var map1 = new Map();

map1.set(1, 2);
console.log(map1.get(2));
console.log(map1.has(2));
console.log(map1.has(1));
console.log(map1.size);

for (let user of map1.entries()) {
    console.log(user[0], user[1]);
}