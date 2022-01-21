//pure function
function getSquare(x) {
    return x * x;
 }
 console.log(getSquare(5));

 //example2
const pureAdd = (num1, num2) => {
    return num1 + num2;
  };
  console.log(pureAdd(5, 5));
  //always returns same result given same inputs

//Impure Function
let num = 0;
const impureAdd = (num1) => {
  return (num += num1);
};
//returns different result given same inputs
impureAdd(5);
//5
impureAdd(5);
//10
console.log(num)