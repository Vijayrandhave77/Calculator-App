let display = document.querySelector("#display");
let btn = document.querySelectorAll(".btn");
let string = "";


btn.forEach((btn) => {
  btn.addEventListener("click", (button) => {
    if (button.target.innerHTML == "=") {
      let result = eval(string);
      display.value = result;
    }
    else if (button.target.innerHTML == "C"){
      string = "";
      display.value = string;
    } else {
      string = string + button.target.innerHTML;
      display.value = string;
    }
  });
});
