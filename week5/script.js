console.log("hi");
//this is a comment
let myName = "Aaron";
const myCity = "Melbourne";
console.log(myName, "lives in", myCity);
console.log(`${myName} 
    
    lives in 
    
    ${myCity}`);

{
  let b = 10;
  console.log(b);
}
let count = 10;
console.log(count);

let isItMorningClass = true;
let isItAfternoonClass = false;

let myStudentRecord = {
  name: "Aaron",
  id: 1234,
  class: "OART1013",
  isItScience: false,
  isItDesign: true,
};

console.log("Hello everyone, my name is ", myStudentRecord.name);
console.log("my id is", myStudentRecord.id);
console.log("my class is", myStudentRecord.class);
console.log("are you science student? ", myStudentRecord.isItScience);

const numberArray = [2, 4, 6, 8, 10];
console.log(numberArray[2]);
myStudentRecord.isItScience = true;
if (myStudentRecord.isItScience === true) {
  console.log("Sorry you are in the wrong class");
} else {
  console.log("Welocome to OART1013");
}
let myScore = 60;
if (myScore >= 90) {
  console.log("You score a HD");
} else if (myScore < 90 && myScore >= 70) {
  console.log("you scored a D");
} else if (myScore < 70 && myScore >= 50) {
  console.log("you score a C");
} else {
  console.log("you score p");
}

console.log("Hello Sarah");
console.log("Hello Peter");
console.log("Hello Alice");
console.log("Hello Robert");
console.log("Hello Jenny");

const name = ["Sarch", "Peter", "Alice", "Robert", "Jenny"];

for (let i = 0; i < name.length; i++) {
  console.log("hello", name[i]);
}
let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];
let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log(total);
let sum = 0;
for (let i = 0; i < 4; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}

console.log(sum);
