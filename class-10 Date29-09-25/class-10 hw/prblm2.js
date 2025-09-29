// Problem 2:
// Write a program that takes a number and prints:
// "Even" if the number is even
// "Odd" if the number is odd
// 2. Loops (for, while, forEach)

// 1. Using for loop
for (let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i + " number is even");    
    }
    else{
        console.log(i + " number is odd");
    }
}

// 2. Using while loop

let j = 1;
while (j <= 10) {
    if (j % 2 == 0){
        console.log(j + " This num is even");
    }
    else{
        console.log(j + " This num is odd");
    }
    j++;
}

// 3. Using forEach loop
let evenOdd = [1,2,3,4,5,6,7,8,9,10];

evenOdd.forEach(
    function (num) {
        if (num % 2 == 0) {
            console.log(num + " is even");
            
        }
        else{
            console.log(num + " is odd");
            
        }
    }
)