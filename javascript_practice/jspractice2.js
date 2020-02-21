/*
// create an array
let array = ["hello", 2];
//console.log(array);

//function to access array data using index
function accessing_data(array) {
    return array[0];
}
//console.log(accessing_data(array));

//update the data in array
function update_array(array) {
    array[0] = 45;
    array[1] = 64;
    array[2] = "fifty four";
    return array;
}
//console.log(update_array(array));

//using bracket notation display 8 and 12 from myarray
let myArray = [
    [1, 2, 3],
    [4, , 5, 6],
    [7, 8, 9],
    [10, 11, 12], 13, 14
];
//console.log(myArray[2][1]);
//console.log(myArray[3][2]);

//add ["dog",3] onto end of the array

myArray = ["jhon", [2], 23];
//console.log(myArray.length); //for length of array
//console.log(myArray.push(["dog", 3])); //here getting length after push that value
////console.log(myArray.pop()); //remove last element
//console.log(myArray.shift()); //remove first ele from array
//console.log(myArray.unshift("Good mrng")); //add ele begining of array and
//console.log(myArray);
//console.log(myArray.splice(1, 1)); //remove middle ele from myarray

//remove consecutive ele from myarray sum of remaining ele to be 10.
let myarray = [2, 4, 5, 1, 7, 5, 2, 1];
delete(myarray.splice(1, 4));
console.log(myarray);


array = [10, 11, 12, 13, 14, 15];
console.log(array.slice(2, 4)); //extract 2 consecutive elements
console.log(array.indexOf(10)); //know the index of particluar ele
console.log(array.indexOf(100)); //return -1 because 100 not in array

array = [1, ["two", 3], "four"];
console.log(array[1].indexOf("two"));

let charray = ["a", "b", "a", "a", "e", "a", "f"];
console.log(charray.lastIndexOf("a"));


function add_ele_end_ofthe_arr(array) {
    let len = array.length;
    array[len] = "five"; //adding one ele
    array.push(12, 15, 16, 17); //adding more ele
    return array;
}
console.log(add_ele_end_ofthe_arr(array));
//concatinating 2 or more arrays
let newarr = [2, 4];
let res = array.concat(newarr);
console.log(res);

console.log(charray.splice(4, 3, "one", "two", "three")); //changing last three ele in charray
console.log(charray);

let Arrayele = [10, 11, 12, 12, 15];
Arrayele.splice(3, 1, 13, 14);
console.log(Arrayele);
let unsort = [5, 2, 3, 10];
console.log(unsort.sort());
console.log(unsort.reverse());

console.log(charray.join(" ")); //join all array ele


//create object and properties
let costumes = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
};
console.log(costumes.hat);
console.log(costumes.shirt);
console.log(costumes.shoes);

let car = {
    "model name": "verna",
    "fuel type": "petrol",
    "drive mode": "manual",
};
console.log(car['model name']);
console.log(car['fuel type']);
console.log(car['drive mode']);

let myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["puppie"],
};
console.log(myDog.name);
console.log(myDog['name']);
myDog.bark = "woof";
console.log(myDog['bark']);
delete(myDog.tails);
console.log(myDog.tails);

//is property exits

let positions = {
    top: "hat",
    bottom: "pants",
};

function property_exit(positions, property) {
    return positions.hasOwnProperty(property);
}
console.log(property_exit(positions, "bottom"));
console.log(property_exit(positions, "middle"));
*/


/* h1Element is a variable and object. textContent,appendChild,createElement are properties.body,document are objects*/
// let h1Element = document.createElement("h1"); //document object represents the whole html document
// h1Element.textContent = "New Heading!!!";
// document.body.appendChild(h1Element);

//20-02-20 practice
/*
function EligibleVotersIndia(VotersDetails) {
    let count = 0;
    for (let i = 0; i < VotersDetails.length; i++) {
        if (VotersDetails[i].age >= 18) {
            count += 1;
        }
    }
    console.log(count);
}
let VotersDetails = [{ "name": "Jhon", "age": 12, "PhoneNumber": "9999999999" },
    { "name": "akbar", "age": 18, "PhoneNumber": "8888888888" },
    { "name": "devi", "age": 22, "PhoneNumber": "7777777777" },
    { "name": "sri", "age": 16, "PhoneNumber": "99664546999" },
    { "name": "Jhon", "age": 17, "PhoneNumber": "9965772999" }
];
EligibleVotersIndia(VotersDetails);

function getCountOfEligibleVoters(people, isEligible) {
    let count = 0;
    for (let i = 0; i < people.length; i++) {
        if (isEligible(people[i].age)) {
            count = count + 1;
        }
    }
    return count;
}

function isEligibleToVoteIndia(age) {
    return age >= 18;
}

function isEligibleToVoteUs(age) {
    return age >= 16;
}
let people = [{ "name": "Jhon", "age": 12, "PhoneNumber": "9999999999" },
    { "name": "akbar", "age": 18, "PhoneNumber": "8888888888" },
    { "name": "devi", "age": 22, "PhoneNumber": "7777777777" },
    { "name": "sri", "age": 16, "PhoneNumber": "99664546999" },
    { "name": "Jhon", "age": 17, "PhoneNumber": "9965772999" }
];
console.log(getCountOfEligibleVoters(people, isEligibleToVoteIndia));

console.log(getCountOfEligibleVoters(people, isEligibleToVoteUs));



let ages = [10, 33, 16, 55];

function isEligibleToVote(age) {
    return age >= 18;
}
let eligibleVoters = ages.filter(isEligibleToVote);
console.log(eligibleVoters.length);

let people = [{ "name": "Jhon", "age": 12, "PhoneNumber": "9999999999" },
    { "name": "akbar", "age": 18, "PhoneNumber": "8888888888" },
    { "name": "devi", "age": 22, "PhoneNumber": "7777777777" },
    { "name": "sri", "age": 16, "PhoneNumber": "99664546999" },
    { "name": "Jhon", "age": 17, "PhoneNumber": "9965772999" }
];
let eligibleVotersInIndia = people.filter(isEligibleToVoteIndia);

function isEligibleToVoteIndia(person) {
    return person.age >= 18;
}
console.log(eligibleVotersInIndia);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(isOddNumber);

function isOddNumber(oddnumbers) {
    return oddnumbers % 2 !== 0;
}
console.log(oddNumbers);

//using array function
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = arrayOfNumbers.filter(number => number % 2 === 1);
console.log(oddNumbers);
*/
//getting names of eligible voters using filter and normal function
/*
let people = [{ "name": "Jhon", "age": 12, "PhoneNumber": "9999999999" },
    { "name": "akbar", "age": 18, "PhoneNumber": "8888888888" },
    { "name": "devi", "age": 22, "PhoneNumber": "7777777777" },
    { "name": "sri", "age": 16, "PhoneNumber": "99664546999" },
    { "name": "Jhon", "age": 17, "PhoneNumber": "9965772999" }
];
let namesOfeligibleVotersInIndia = people.filter(isEligibleToVoteIndia);

function isEligibleToVoteIndia(person) {
    return person.age >= 18;
}
console.log(namesOfeligibleVotersInIndia);
for (let i = 0; i < namesOfeligibleVotersInIndia.length; i++) {
    console.log(namesOfeligibleVotersInIndia[i].name);
}


//getting names of eligible voters using filter and Array function(NOTCOMPLETED)
let people = [{ "name": "Jhon", "age": 12, "PhoneNumber": "9999999999" },
    { "name": "akbar", "age": 18, "PhoneNumber": "8888888888" },
    { "name": "devi", "age": 22, "PhoneNumber": "7777777777" },
    { "name": "sri", "age": 16, "PhoneNumber": "99664546999" },
    { "name": "Jhon", "age": 17, "PhoneNumber": "9965772999" }
];
let namesOfeligibleVotersInIndia = people.filter(isEligibleToVoteIndia);

function isEligibleToVote=(namesOfeligibleVotersInIndia)=> {
    namesOfeligibleVotersInIndia.name
}
console.log(isEligibleToVote());


let ages = [32, 33, 16, 40];
ages.forEach(getAge);

function getAge(age) {
    console.log(age);
}

let numbers = [32, 33, 16, 40];
numbers.forEach(myFunction);

function myFunction(item, index, numbers) {
    numbers[index] = item * 5;
}
console.log(numbers);

//___________________________________________________________________________________________________

let ages = [32, 33, 16, 40];

function incrementAgeBy2(age) {
    return (age = age + 2);
}
let newAges = ages.map(incrementAgeBy2);
console.log(newAges);



let people = [{ "name": "Jhon", "age": 12, "PhoneNumber": "9999999999" },
    { "name": "akbar", "age": 18, "PhoneNumber": "8888888888" },
    { "name": "devi", "age": 22, "PhoneNumber": "7777777777" },
    { "name": "sri", "age": 16, "PhoneNumber": "99664546999" },
    { "name": "Jhon", "age": 17, "PhoneNumber": "9965772999" }
];

function getNamesOfEligibleVoters(people) {
    return people.map(person => person.name);
}
console.log(getNamesOfEligibleVoters(people));

let ages = [3, 5, 6, 7, 8, 21];

function agesMultipliedBy2(ages) {
    return ages.map(ages => ages * 2);
}
console.log(agesMultipliedBy2(ages));


let ages = [3, 5, 6, 7, 8, 21];

function CheckAge(age) {
    return age > 20;
}
let age = ages.find(CheckAge);
console.log(age);

//(NOT COMPLETED)
let people = [{ id: 1, name: "Jhon" }, { id: 2, name: "Pete" }, { id: 3, name: "Mary" }];

people.forEach(myFunction);

function myFunction(item, index, people) {
    if (people[index] === "Jhon")
        return people.id;
}
console.log(myFunction);
//_________________________
let cat = 'Miaow';
let dog = 'Woof';
let animals = {
    cat: cat,//or directly can give cat,
    dog: dog //or directly can give dog,
};
console.log(animals.cat);
//_________________________
//DOUBHT
let car = {
    color: "silver",
    model: "verna",
    weight:"45 kgs"
}
//dot notation
let color = car.color;
console.log(color);
//object notation
let { color } = car;
console.log(color);

//_________________________


const teams = { //we can use let also instead of const
    blue: 'Blue',
    green: 'Green',
    orange: 'Orange',
    white: 'White',
};

const { white, ...bgoTeams } = teams;
console.log(bgoTeams);

function sumOfNumbers(number1, number2) {
    return number2 + number2;
}
console.log(sumOfNumbers(1, 2, 3, 4, 5));
//_________________________

function sumOfNumbers(...args) {
    console.log(typeof(args));
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumOfNumbers(1, 2, 3, 4, 5));

//_________________________

//firstArgument,args are just parameters we can give any names
function sumOfNumbers(firstArgument, ...args) { //This leaves first firstobject and add remaining. not access like(firstArgument,...args,latArgument)
    console.log(typeof(args));
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumOfNumbers(1, 2, 3, 4, 5));


//Combine two arrays using concat
const first = [1, 2, 3, 4];
const second = [5, 6, 7];
const combined = first.concat(second);
console.log(combined);
const combinedtoaddAB = first.concat(["a"]).concat(second) //notcompleted.

// combine 2arrays using spread operator
const combined1 = [...first, ...second];
console.log(combined1);
const combined2withAB = [...first, "a", ...second, "b"];
console.log(combined2withAB);


function sumOfNumbers(...args) {
    // console.log(typeof(args));
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(...numbers));

//list/array of items ... means Rest or Spread operator
const name = "iBHubs";
const letters = [...name];
console.log(letters);

*/
//21/02/20
