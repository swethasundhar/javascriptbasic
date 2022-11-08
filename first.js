//js statements

let a, b, c;
a = 5;
b = 2;
c = a + b;

document.getElementById("demo_1").innerHTML = c;

//js variables

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

document.getElementById("demo_2").innerHTML = total;

// js var, let keyword

//var can be redeclared.
var z = "John Doe";
var z = 0;

//let cannot be redeclared.
// let x = "John Doe";
// let x = 0;


//var can be used before declared.
carName = "Saab";
var carName;

document.getElementById("demo_3").innerHTML = carName;

//let must be Declared before use.
Name = "Saab";
let Name;

document.getElementById("demo_4").innerHTML = carName;

//var does not have block scope.
let d = 20;

{
    let d = 3;
}
document.getElementById("demo_5").innerHTML = d;


//let have Block Scope.
let y = 10;

{
    let y = 2;
}
document.getElementById("demo_6").innerHTML = y;




