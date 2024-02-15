function firstLetterName(name) {
    const firstLetter = name[0];
    alert(`The name ${name} starts with the letter ${firstLetter}`);
}
function divisibleByTwo(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function largestNum(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
firstLetterName("Mariana");
const odd = divisibleByTwo(15);
const even = divisibleByTwo(14);
console.log("Is 15 divisible by two?", odd);
console.log("Is 14 divisible by two?", even);
const numbers = [23, 7, 45, 67, 89, 101, 2];
const maxNumber = largestNum(numbers);
console.log(maxNumber);