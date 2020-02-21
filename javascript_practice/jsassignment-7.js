//Question1
/*
function filterWordsStartsWithTOrEndsWithR(args) {
    let result = args.filter(args => args.startsWith("t") || args.endsWith("r"));
    return result;
}
console.log(filterWordsStartsWithTOrEndsWithR(["dream", "player", "trens", "rest", "more", "regret", "tree"]));

//Question2 method1 dont have clarity
let nonUnique = "Was it a cat I saw?";
let variable = [...new Set(nonUnique.split(''))];
console.log(variable);

//question2  method2using functions;dont have clarity in filter
function printUniqueCharacters(sentence) {
    let unique = sentence.split('').filter(function(item, i, ar) { return ar.indexOf(item) === i; }).join(',');
    return unique;
}
console.log(printUniqueCharacters("Was it a cat I saw?"));


//Question3
let array = ["Raj", "Viraj", "Ram", "Vikram"];

function ToUpperCase(array) {
    let upper = array.map(args => args.toUpperCase());
    return upper;
}
console.log(ToUpperCase(array));

//question 4 normal method
let numberarray = [5, 1, 9, 6, 15];

function SquareAlternateElements(array) {
    let arrays = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0)
            arrays.push(Math.pow(array[i], 2));
        else
            arrays.push(array[i]);
    }
    return arrays;
}
console.log(SquareAlternateElements(numberarray));
//console.log(numberarray.map(SquareAlternateElements));

//Question 4 using map

let numberarray = [5, 1, 9, 6, 15];
function SquareAlternateElements(array) {
    let squareofalternatenumber = array.map(function(num, index, array) {
        return (index % 2 === 0) ? num * num : num;
    });
    return squareofalternatenumber;
}
console.log(SquareAlternateElements(numberarray));

//Question 4 
let numberarray = [5, 5, 5, 6, 15];
let result = numberarray.map(function(num, index, array) {
    return index % 2 === 0 ? num * num : num;
});
console.log(result);

//Question5
let items = ["5", "1", "4", "6", "15"];

function IsAllareStrings(items) {
    let copy = [];
    items.forEach(function(item) {
        if (typeof(item) === "string") {
            copy.push(item);
        }
    });
    return (copy.length === items.length) ? true : false;
}
console.log(IsAllareStrings(items));

//Question5
let items1 = ["5", "1", "4", "6", "15"];
let flag = true;
items1.forEach(function(item) {
    if (typeof(item) !== "string")
        flag = false;
});
console.log(flag);


//Question 6
let stringarray = ["Telugu", "Kannada", "Malayalam"];

function IsPalindrome(StringArray) {
    let count = 0;
    StringArray.forEach(function(word) {
        if (word.toLowerCase() === (word.split('').reverse().join('')).toLowerCase())
            count++;
    });
    return (count != 0) ? true : false;
}
console.log(IsPalindrome(stringarray));
//Question6
let stringarray1 = ["Telugu", "Kannada", "Malayalam"];
let Ispalindrome = false;
stringarray1.forEach(function(word) {
    if (word.toLowerCase() === (word.split('').reverse().join('')).toLowerCase())
        Ispalindrome = true;
});
console.log(Ispalindrome);

//Question7
function checkingStringUsingLengthandFirstWord(array, firstletter, itemlength) {
    let resultarray;
    array.find(function(word) {
        if (word.startsWith(firstletter) && word.length === itemlength) {
            resultarray = word;
            //  return word;
        }
    });
    return `"${resultarray}"`;
}
console.log(checkingStringUsingLengthandFirstWord(["devi", "sri", "Telugu", "devisri"], "T", 6));

//Question8 method1
let trees = [
    { name: "birch", count: 10, type: "outdoor" },
    { name: "maple", count: 7, type: "indoor/outdoor" },
    { name: "peace lilly", count: 6, type: "indoor" },
    { name: "oak", count: 2, type: "outdoor" },
    { name: "lucky bamboo", count: 7, type: "indoor" }
];

function checkCountGreaterThan6(Trees) {
    // console.log(Trees);
    let personGreter6;
    Trees.find(function(persondetails) {
        if (persondetails.count > 6 && persondetails.type === "indoor")
            personGreter6 = persondetails;
    });
    //console.log(personGreter6);
    return personGreter6;
}
console.log(checkCountGreaterThan6(trees));


//Question8 method2
let trees = [
    { name: "birch", count: 10, type: "outdoor" },
    { name: "maple", count: 7, type: "indoor/outdoor" },
    { name: "peace lilly", count: 6, type: "indoor" },
    { name: "oak", count: 2, type: "outdoor" },
    { name: "lucky bamboo", count: 7, type: "indoor" }
];
trees.find(function(Trees) {
    if (Trees.count > 6 && Trees.type === "indoor")
        console.log(Trees);
});
*/
