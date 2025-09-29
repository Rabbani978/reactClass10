// Problem 4:
// Use a while loop to calculate the sum of numbers from 1 to 5.
let x = 1;       // কাউন্টার ভ্যারিয়েবল শুরু 1 থেকে
let sum = 0;     // যোগফল রাখার জন্য ভ্যারিয়েবল

while (x <= 5) {       // যতক্ষণ i ≤ 5 থাকবে, লুপ চলবে
    sum = sum + x;     // sum এ i যোগ করা হবে
    x++;               // i এর মান ১ করে বাড়ানো হবে
}

console.log("Sum = " + sum);
