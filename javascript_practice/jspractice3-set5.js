/*
//#Question 1
function greatest_number(number1, number2) {
    if (number1 >= number2)
        return number1;
    else
        return number2;
}
alert(greatest_number(10, 11));

//#Question 2
function smallest_number(number1, number2) {
    if (number1 < number2)
        return number1;
    else
        return number2;
}
alert(smallest_number(10, 11));
//#Question 3
function guidePedestrian(traffic_light) {
    switch (traffic_light) {
        case "red":
            return "Do not cross";
        case "green":
            return "Safe to cross";
        case "orange":
            return "Cross only,if is safe";
        default:
            return "Hola! You are not in junction";
    }
}
alert(guidePedestrian("red"));
//#Question 4
function checkEqualityOfTwoNumbers(argument1, argument2) {
    if (argument1 === argument2)
        return "Both are equal";
    else
        return "Not equal";
}
alert(checkEqualityOfTwoNumbers("1", 1));
//#Question 5
function isPositiveNumber(number) {
    if (number > 0)
        return true;
    else
        return false;
}
alert(isPositiveNumber(-8));

//#Question 6
function getGrade(marks) {
    if (marks < 35 && marks > 0)
        return "Fail";
    else if (marks >= 35 && marks <= 50)
        return "D";
    else if (marks > 50 && marks <= 60)
        return "C";
    else if (marks > 60 && marks <= 70)
        return "B";
    else if (marks > 70 && marks <= 80)
        return "A";
    else if (marks > 80 && marks <= 100)
        return "Distinction";
    else
        return "Invalid marks";
}
alert(getGrade(101));

//#Question 7
function display_input_type(element) {
    return typeof(element);
}
alert(display_input_type(1));
let a;
alert(display_input_type(a));
alert(display_input_type("1"));
alert(display_input_type(true));
alert(display_input_type(null));

let element = "devi";
//alert(typeof(element))
switch (typeof(element)) {
    case "number":
        alert("Type is Number");
        break;
    case "string":
        alert("Type is String");
        break;
    case "boolean":
        alert("Type is Boolean");
        break;
    case "null":
        alert("Type is Object");
        break;
    default:
        alert("Type is Undefined");
}

//#Question 8
function Number_MultipleOf_4_or_MultipleOf_5(number) {
    if (number % 4 == 0 || number % 5 == 0)
        return true;
    else
        return false
}
alert(Number_MultipleOf_4_or_MultipleOf_5(3));

//#Question 9
function isVowelOrConsonant(character) {
    if (character.match(/\b[aeiouAEIOU]{1}\b/))
        return "Vowel";
    else if (character.match(/\b[^aeiouAEIOU\d]{1}\b/))
        return "Consonant";
    else
        return "Invalid input";
}
console.log(isVowelOrConsonant("string"));

//#Question 10
function isNumberEven_or_Odd(number) {
    return (a % 2 == 0) ? "Even" : "Odd";
}
let a = 213;
console.log(isNumberEven_or_Odd(a));

//#Question 10
function GCD_of_two_numbers(number1, number2) {
    let gcd;
    for (let i = 1; i <= number1 && i <= number2; i++) {
        if (number1 % i == 0 && number2 % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}
console.log(GCD_of_two_numbers(16, 88));

//#Question 11
function CountNumberOfDigits(number) {
    let numberOfDigits = 0;
    while (number != 0) {
        number = Math.floor(number / 10);
        console.log(number);
        numberOfDigits++;
    }
    return numberOfDigits;
}
console.log(CountNumberOfDigits(4567));

//#Question 12
function SumOfDigits(number) {
    let sumofdigits = 0;
    while (number != 0) {
        let remainder = parseInt(number % 10);
        sumofdigits += remainder;
        number = parseInt(number / 10);
    }
    return sumofdigits;
}
console.log(SumOfDigits(4444));

//#Question 13
function factorialOfNumber(number) {
    let factorial = 1;
    while (number != 0) {
        //console.log(number);
        factorial *= number;
        number--;
    }
    return factorial;
}
console.log(factorialOfNumber(10));

//#Question 14
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        return "Leap year";
    else
        return "Not a leap year";

}
console.log(isLeapYear(2019));

//#Question 15
function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    if (number == sum)
        return "Perfect number";
    else
        return "Not a perfect number";
}
console.log(isPerfectNumber(6));

//#Question 16
function factorialOfNumber(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        if (number % i == 0)
            arr.push(i);
    }
    return arr;
}
console.log(factorialOfNumber(5));

//#Question 17
function Smallest_number_from_array(array) {
    let smallest_number = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest_number)
            smallest_number = array[i];
    }
    return smallest_number;
}
console.log(Smallest_number_from_array([12, 4, -1, 0]));

//#Question 18
function greatest_number_from_array(array) {
    let greatest_number = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > greatest_number)
            greatest_number = array[i];
    }
    return greatest_number;
}
console.log(greatest_number_from_array([5, 12, -1, 0]))

//#Question 19
function Sum_of_elements_in_array(array) {
    let SumOfArrayElements = 0;
    for (let i = 0; i < array.length; i++) {
        SumOfArrayElements += array[i];
    }
    return SumOfArrayElements;
}
console.log(Sum_of_elements_in_array([12, 19, 2, 25, 9, 1]));

//#Question 20
function CountNumberOfOddDigits(array) {
    let countOddDigits = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0)
            countOddDigits++;
    }
    return countOddDigits;
}
console.log(CountNumberOfOddDigits([12, 19, 2, 25, 9, 1]));

//#Question 21
function CountNumberOfEvenDigits(array) {
    let countEvenDigits = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0)
            countEvenDigits++;
    }
    return countEvenDigits;
}
console.log(CountNumberOfEvenDigits([12, 19, 2, 25, 9, 1]));

//#Question 22
function isEmptyObject(object) {
    if (Object.entries(object) == 0)
        return true;
    else
        return false;
}
console.log(isEmptyObject({ name: 'devi', age: '22' }));
//let obj_car = Object.create({});
*/
//#Question 23
//NEED TO CHECK AGAIN
function displayPropertyWithValue(person_obj) {
    for (let [key, value] of Object.entries(person_obj)) {
        console.log(`${key} ${value},`);
    }
}
displayPropertyWithValue({ Jhon: "software", Ann: "hardware" });

function getAllPropertyNames_keys(person_obj) {
    return Object.keys(person_obj);
}
console.log(getAllPropertyNames_keys({ Jhon: "software", Ann: "hardware" }));
/*
//#Question 24
function getAllPropertyNames_values(person_obj) {
    //   return Object.values(person_obj);
    let array = [];
    for (let key of Object.keys(person_obj)) {
        array.push(`${key}`);
    }
    return array;
}
console.log(getAllPropertyNames_values({ Jhon: "software", Ann: "hardware" }));

//#Question 25
function getArrayLength(array) {
    return array.length;
}
console.log(getArrayLength([1, 2, 3, 4]));

//#Question 26
function update_array(array) {
    return array.concat([5, 6]);
}
console.log(update_array([1, 2, 3, 4]));

//#Question 27
function removeLastElementFromArray(array) {
    return array.pop();
}
console.log(removeLastElementFromArray(["a", "b", [23, 35, "x"]]));

//#Question 28
function removeElementsFromArray(array, fromindex, toindex) {
    array.splice(fromindex, toindex);
    return array;
}
console.log(removeElementsFromArray(["a", "b", "c", "d"], 0, 4));

//#Question 29
function getSubArray(array, fromindex, toindex) {
    return array.slice(fromindex, toindex);
    // return array;
}
console.log(getSubArray(["a", "b", "c", "d", "e"], 2, 4));

//#Question 30
function OperationsOnMyArray(array) {
    array.push(10);
    array.splice(0, 3);
    array.splice(0, 3, 0, 1, 2);
    delete array[1];
    array.pop();
    return array;
}
let myArray = [1, 1.4, 2, 3, 122, ["a", "b", "f"], true, false, [0]];
console.log(OperationsOnMyArray(myArray));

//#Question 31
function addProperty(given_object, property, key) {
    given_object[property] = key;
    return given_object;
}
console.log(addProperty({ "a": 1, "b": 2, "c": 3 }, "twenty four", 24));

//#Question 32
function deleteProperty(given_object, key) {
    delete given_object[key];
    return given_object;
}
console.log(deleteProperty({ a: 1, b: 2, c: 3 }, "c"));

//#Question 33
function update_array(array) {
    return array.concat([{ a: "1", b: "2" }, { c: "5" }, { f: 6 }]);
}
console.log(update_array(["a", "b", "c"]));

//#Question 34
function addProperty(object) {
    //console.log(object);
    object.data.friends.push("ram", "jhon", "Weisly", "Robin");
    return object;
}

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'facebook',
        friends: ['Sam', 'Kira', 'Tomo'],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};
console.log(addProperty(user));

//#Question 35
let myObject = {
    height: 43,
    width: 22,
    rectangle: [22, 33]
};
myObject.addition = function addition(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

console.log(myObject.addition([4556, -443, 544, 3453]));
*/

//let selectedColor = null;
//alert(typeof(selectedColor));

// const interest;
// try {interest = 5;
// console.log(interest);
// }
// catch (e) {
//     console.log("error");
// }
// alert(null == undefined);
// alert(null === undefined);
