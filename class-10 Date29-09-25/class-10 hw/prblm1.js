// Problem 1:
// Write a function checkType(value) that prints whether the value is a string, number, or boolean.

function checkType(value) {
    if (typeof value == "string"){
        console.log("this is a string");
        
    }
    else if (typeof value == "number"){
        console.log("this is a number");
    }
    else if (typeof value == "boolean"){
        console.log("this is a boolean");
        
    }
    else{
        console.log("Unknown type");
        
    }
}
checkType("hello world");
checkType(124598);
checkType(true);
checkType(NaN);
checkType(BigInt);
checkType(null);
