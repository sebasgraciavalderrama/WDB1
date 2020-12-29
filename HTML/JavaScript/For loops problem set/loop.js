console.log("Numbers between -10 and 19");
for (let i = -10; i <= 19; i++){
    console.log(i);
}

console.log("Even numbers between 10 and 40");
for (let i = 10; i <= 40; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Odd numbers between 300 and 333");
for (let i = 300; i <= 333; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Numbers all numbers divisible by 5 and 3 between 5 and 50");
for (let i = 5; i <= 50; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
let colors = ['red', 'orange', 'yellow', 'green'];

numbers.forEach(function (el, i, arr){
    console.log(el, i, arr[i]);
});

function logNums (el, i, arr) {
    console.log(el, i , arr);
}

numbers.forEach(logNums);

