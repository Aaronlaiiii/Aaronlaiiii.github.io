function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  let a1value = parseFloat(a1.value);
  let a2value = parseFloat(a2.value);
  let total = calculateTotal(a1value, a2value);
  //let total =parseFloat(a1,value) + parseFloat(a2.value);//
  console.log(total);
  giveReport(total);
}

function calculateTotal(a, b) {
  let sum = a + b;
  return sum;
}

function giveReport(score) {
  const report = document.querySelector("#report");
  if (score > 30) {
    console.log("you got HD");
    report.textContent = "you got HD";
  } else if (score > 20 && score <= 30) {
    console.log("you got D");
    report.textContent = "you got D";
  }
}

const para = document.querySelector("p");
console.log(para);

const allPara = document.querySelectorAll("p");
console.log(allPara);

const heading = document.querySelector("h1");
console.log(heading);

const abcd = document.querySelector(".abcd");
console.log(abcd);

const allAbcd = document.querySelectorAll(".abcd");
console.log(allAbcd);
