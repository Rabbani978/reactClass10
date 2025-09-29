// Problem 6:
// Create a function countPassFail(scores) that takes an array of numbers.
// Count how many scores are >= 60 (pass)
// Count how many scores are < 60 (fail)
// Return an object like: { pass: 3, fail: 2 }

function countPassFail(scores){
    let result = {pass : 0, fail : 0};

    scores.forEach(function(score) {
        if(score >= 60){
            result.pass++;
        }else{
            result.fail++;
        }
    });
    return result;
}
console.log(countPassFail([80,40,50,60,90]));
