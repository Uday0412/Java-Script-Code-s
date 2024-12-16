let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 }
];
products.sort((a, b) => a.price - b.price);
console.log(products);
// Output: Sorted products by price
