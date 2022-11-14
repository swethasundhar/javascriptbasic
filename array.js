//Array is a special variable, which can hold more than one value.
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("test1").innerHTML = cars;

//filter method
const ages = [32, 33, 16, 40];

document.getElementById("test2").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

//find method
const ages1 = [3, 10, 18, 20];

document.getElementById("test3").innerHTML = ages1.find(checkAge);

function checkAge(age) {
    return age > 18;
}

//foreach method
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("test4").innerHTML = text;

function myFunction(item, index) {
    text += index + ": " + item + "<br>";
}

//includes method
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test5").innerHTML = fruits1.includes("Banana", 0);

//map method
const numbers = [4, 9, 16, 25];
document.getElementById("test6").innerHTML = numbers.map(Math.sqrt);
document.getElementById("test7").innerHTML = numbers;

//slice method
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1, 3);

document.getElementById("test8").innerHTML = citrus;

//shift method
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.shift();

document.getElementById("test9").innerHTML = fruits3;

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test10").innerHTML = fruits4.shift();