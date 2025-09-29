// Problem 5:
// Given an array ["apple", "banana", "cherry"], use forEach to print each fruit .
// -----Normal-------
// let fruits = ["apple","banana","cherry"]
// fruits.forEach(
//     function(fruit){
//         console.log(fruit);
        
//     }
// )
// Array of objects
let fruits = [
    {name : "apple"},
    {name : "banana"},
    {name : "cherry"},
];
// Function to print fruit details
function printFruits(fruitArray) {
    fruitArray.forEach(function(fruit)
    {
    console.log("Fruit name:" + fruit.name);
    });
}

printFruits(fruits);
