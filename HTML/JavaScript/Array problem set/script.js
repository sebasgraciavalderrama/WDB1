
function sumArray(arr) { //[1,2,3,4,5]
    return arr.reduce(function (a,b){
       return a+b;
    }, 0);
}

function reverseArray(arr) {
    let arraySize = arr.length;
    console.log(arraySize);
    for (let i = arraySize; i>=0; i--){
        console.log(arr[i]);
    }
}

function maxArray(arr){
    return arr.reduce(function (a,b){
        return Math.max(a,b);
    });
}

let numbers = [1,2,3,4,5];

console.log(sumArray(numbers));
reverseArray(numbers);
console.log(maxArray(numbers));