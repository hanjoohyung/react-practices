import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProdeucts1 = state.order.products;

updateProdeucts1.push({
    "no": "s002-002",
    "name": "블루양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProdeucts1, state.order.products === updateProdeucts1);

console.log("=============================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
const updateProdeucts2 = state.order.products.concat({
    "no": "s002-002",
    "name": "블루양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProdeucts2, state.order.products === updateProdeucts2);

console.log("=============================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
const updateProdeucts3 = ([...state.order.products, {
    "no": "s002-002",
    "name": "블루양말",
    "price": 2000,
    "amount": 1
}]);

console.log(state.order.products, updateProdeucts3, state.order.products === updateProdeucts3);