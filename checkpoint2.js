
// STRING MANIPULATION FUNCTIONS
// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}



// ARRAY FUNCTIONS
// 4. Find Maximum
function findMaximum(numbers) {
    return Math.max(...numbers);
}


// 5. Find Minimum
function findMinimum(numbers) {
    return Math.min(...numbers);
}


// 6. Sum of Array
function sumArray(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}


// 7. Filter Array
function filterArray(numbers, condition) {
    return numbers.filter(condition);
}


// MATHEMATICAL FUNCTIONS
// 8. Factorial
function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}


// 9. Prime Number Check
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


// 10. Fibonacci Sequence
function fibonacci(terms) {
    let sequence = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < terms; i++) {
        sequence.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}