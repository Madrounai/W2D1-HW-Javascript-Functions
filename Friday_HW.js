// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) {
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(249,1997,25));

// 3
function isCharacterAVowel(character) {
    let isVowel = true
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {

        return isVowel
    }
     else {
         return "false"
    }
}

// 4.
const sumArray = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 5
function multiplyArray(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}

console.log(multiplyArray([1, 2, 3, 4]));

// 6
const numArgs = function () {
    return arguments.length;
}

console.log(numArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 7
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("rockstar"));// 8


// 8
function findLongestWord(array) {
    let longestWord = array[0];
    for (let i = 0; i < array.length; i++) {
        if (longestWord.length < array[i].length) {
            longestWord = array[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(["milk", "egg", "bread", "bananas"]));

// 9
const filterLongWords = function (array, num) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(filterLongWords(["milk", "egg", "bread", "bananas"], 4));



