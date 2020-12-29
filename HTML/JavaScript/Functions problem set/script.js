function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false;
    }
}

function isEvenSimplified(number) {
    return number % 2 === 0;
}

function factorial(number) {
    var total = 1;
    if (number === 0) {
        return 1;
    }
    for (i = 0; i < number; i++) {
        total = total * (number - i);
    }
    return total;

}

function kebabToSnake(word) {
    word = word.replace(/-/g, "_");
    return word;
}

console.log("isEven:");
console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(10));
console.log(isEven(89));
console.log(isEven(35));
console.log("isEvenSimplified:");
console.log(isEvenSimplified(4));
console.log(isEvenSimplified(3));
console.log(isEvenSimplified(10));
console.log(isEvenSimplified(89));
console.log(isEvenSimplified(35));
console.log("Factorial:")
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
console.log("Kebab to Snake:")
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));