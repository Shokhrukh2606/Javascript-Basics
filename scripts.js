function functionTest(expected, func) {
    const result = func();
    if (result === expected) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}


console.log("Expected output of max(55, 30) is 55 and " + functionTest(55, function () { return max(55, 30); }));

function max(a, b) {
    return a > b ? a : b;
}


console.log("Expected output of maxOfThree(25, 12, 55) is 55 and " + functionTest(55, function () { return maxOfThree(25, 12, 55); }));

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Expected output of isVowel('e') is true and " + functionTest(true, function () { return isVowel('e'); }));

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}


console.log("Expected output of sum([3,4,5,6]) is 18 and " + functionTest(18, function () { return sum([3,4,5,6]); }));

function sum(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}


console.log("Expected output of multiply([3,4,5,6]) is 360 and " + functionTest(360, function () { return multiply([3,4,5,6]); }));


function multiply(numbers) {
    return numbers.reduce((acc, val) => acc * val, 1);
}


console.log("Expected output of reverse('webper') is 'repbew' and " + functionTest("webper", function () { return reverse("repbew"); }));
function reverse(str) {
    return str.split('').reverse().join('');
}


console.log("Expected output of findLongestWord(['algorithm', 'wap']) is 9 and " + functionTest(9, function () { return findLongestWord(['algorithm', 'wap']); }));

function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

console.log("Expected output of filterLongWords(['algorithm', 'wap'], 3) is [algorithm] and " + functionTest(['algorithm'], function () { return filterLongWords(['algorithm', 'wap'], 3); }));

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log('modification 1 [43,33,23]', mult([43,33,23]))
console.log('modification 2 [43,33,23]', filt([43,33,23]))
console.log('modification 3 [43,33,23]', prod([43,33,23]))

function mult(nums) {
    return nums.map(i => i * 10)
}

function filt(nums) {
    return nums.filter(i => i === 3)
}

function prod(nums) {
    let res = 1;

    for (let i = 0; i < nums.length; i++) {
        res *= nums[i]
    }

    return res;
}
