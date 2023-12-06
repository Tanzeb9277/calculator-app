const nums = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const display = document.querySelector(".text");
let equation = [];
let operations = [];
const options = document.getElementsByClassName("option");
const arr = [...options];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      let r = document.querySelector(':root');
      r.style.setProperty('--acent-color-one', '#d13f30');
      r.style.setProperty('--acent-color-one-shadow', 'rgba(151, 36, 22)');
      r.style.setProperty('--acent-color-one-hover', '#f96c5b');
      r.style.setProperty('--acent-color-one-hover-shadow', 'rgba(146, 35, 21)');
      r.style.setProperty('--acent-color-two', '#647197');
      r.style.setProperty('--acent-color-two-shadow', 'rgba(65, 77, 116)');
      r.style.setProperty('--acent-color-two-hover', '#a2b3e1');
      r.style.setProperty('--acent-color-two-hover-shadow', 'rgba(63, 75, 107');
      r.style.setProperty('--text-color', '#ffffff');
      r.style.setProperty('--number-color', '#32312c');
      r.style.setProperty('--button-color', '#eae3db');
      r.style.setProperty('--button-color-shadow', 'rgba(177, 164, 152)');
      r.style.setProperty('--button-hover-color', '#ffffff');
      r.style.setProperty('--background-color', '#3b4664');
      r.style.setProperty('--display-color', '#181f32');
      r.style.setProperty('--calc-color', '#252d44');
      r.style.setProperty('--calc-number-color', '#ffffff');
      r.style.setProperty('--toggle-color', '#232c43');


    } else if (index == 1) {

      let r = document.querySelector(':root');
      r.style.setProperty('--acent-color-one', '#ca5502');
      r.style.setProperty('--acent-color-one-shadow', '#893901');
      r.style.setProperty('--acent-color-one-hover', '#ff8b38');
      r.style.setProperty('--acent-color-one-hover-shadow', '#7f441a');
      r.style.setProperty('--acent-color-two', '#377f86');
      r.style.setProperty('--acent-color-two-shadow', '#61b5bb');
      r.style.setProperty('--acent-color-two-hover', '#61b5bb');
      r.style.setProperty('--acent-color-two-hover-shadow', '#1c6068');
      r.style.setProperty('--text-color', '#35352c');
      r.style.setProperty('--number-color', '#32312c');
      r.style.setProperty('--button-color', '#e5e4e1');
      r.style.setProperty('--button-color-shadow', '#a69d91');
      r.style.setProperty('--button-hover-color', '#ffffff');
      r.style.setProperty('--background-color', '#e6e6e6');
      r.style.setProperty('--display-color', '#ededed');
      r.style.setProperty('--calc-color', '#d1cccc');
      r.style.setProperty('--calc-number-color', '#61b5bb');
      r.style.setProperty('--toggle-color', '#d1cccc');



    } else {
      let r = document.querySelector(':root');
      r.style.setProperty('--acent-color-one', '#00decf');
      r.style.setProperty('--acent-color-one-shadow', '#66fcf2');
      r.style.setProperty('--acent-color-one-hover', '#94fff9');
      r.style.setProperty('--acent-color-one-hover-shadow', '#7fdde4');
      r.style.setProperty('--acent-color-two', '#56077c');
      r.style.setProperty('--acent-color-two-shadow', '#b819ee');
      r.style.setProperty('--acent-color-two-hover', '#8730af');
      r.style.setProperty('--acent-color-two-hover-shadow', '#bf15f4');
      r.style.setProperty('--text-color', '#ffe537');
      r.style.setProperty('--number-color', '#ffe537');
      r.style.setProperty('--button-color', '#331b4d');
      r.style.setProperty('--button-color-shadow', '#851f9e');
      r.style.setProperty('--button-hover-color', '#6b34ac');
      r.style.setProperty('--background-color', '#17062a');
      r.style.setProperty('--display-color', '#1e0836');
      r.style.setProperty('--calc-color', '#1e0836');
      r.style.setProperty('--calc-number-color', '#61b5bb');
      r.style.setProperty('--toggle-color', '#1e0836');
    }
    arr
      .filter(function(item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function(e) {
    console.log(display.classList.contains("result"))
    if (display.classList.contains("result")) {
      let result = display.innerHTML;
      equation.splice(0, 2);
      equation.push(result);
      display.classList.remove("result")
      display.innerHTML = '';
    }
    display.innerHTML += e.target.innerHTML;
  })
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function(e) {
    if (display.classList.contains("result")) {
      let result = display.innerHTML;
      equation.splice(0, 2);
      equation.push(result);
      display.classList.remove("result")
      display.innerHTML = '';
    }
    let symbol = e.target.innerHTML;
    operate(symbol);
  })
}

clear.addEventListener("click", clearCalc);
del.addEventListener("click", deleteNum);

function deleteNum() {
  display.innerHTML = "";
  display.classList.remove("result")
}



function clearCalc() {
  display.innerHTML = "";
  equation = [];
  display.classList.remove("result")
}

function add(num1, num2) {
  let result = parseFloat(num1) + parseFloat(num2);
  console.log(equation)
  display.classList.add("result");
  console.log(display.classList.contains("result"))
  display.innerHTML = Math.round(result * 10) / 10;;
}

function subtract(num1, num2) {
  let result = num1 - num2;
  console.log(equation)
  display.classList.add("result");
  console.log(display.classList.contains("result"))
  display.innerHTML = Math.round(result * 10) / 10;;
}

function mutliply(num1, num2) {
  let result = num1 * num2;
  console.log(equation)
  display.classList.add("result");
  console.log(display.classList.contains("result"))
  display.innerHTML = Math.round(result * 10) / 10;;
}

function divide(num1, num2) {
  let result = num1 / num2;
  console.log(equation)
  display.classList.add("result");
  console.log(display.classList.contains("result"))
  display.innerHTML = Math.round(result * 10) / 10;
}

function operate(operation) {


  if (operation == "=" && equation.length < 1) {
    clearCalc();
  }

  if (operation == "=" && display.classList.contains('result')) {
    operations = [];
  }


  if (operation != "=") {
    operations.push(operation)
  }

  console.log(display.innerHTML == "")
  if (display.innerHTML != "") {
    equation.push(parseFloat(display.innerHTML));
  }

  console.log(equation)
  display.innerHTML = "";
  console.log(operations)
  if (equation.length > 1) {
    console.log(operations[0])
    switch (operations[0]) {
      case "x":
        operations.splice(0, 1)
        mutliply(equation[0], equation[1]);
        break;
      case "/":
        operations.splice(0, 1)
        divide(equation[0], equation[1]);
        break;
      case "-":
        operations.splice(0, 1)
        subtract(parseFloat(equation[0]), parseFloat(equation[1]));
        break;
      case "+":
        operations.splice(0, 1)
        add(equation[0], equation[1]);
        break;
    }
  }
}
