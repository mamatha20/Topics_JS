//Hoisting is  declarations to the top 
x =10;
console.log(x);
var x;

//Variable Hoisting with var
a = 5;
console.log(a);
var a;
//example2
b = 12;
var b;
console.log(b);
//Example3
var c;
console.log(c);
c =15;

//Example4
var a =10;
function Myfun(){
    b = "Hello";
    console.log(b);
    var b;
}
Myfun();

//Function Hoisting
Myfun1();
function Myfun1(){
    console.log('Hello','Mamatha');
}