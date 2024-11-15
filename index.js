const keysBtn = document.querySelectorAll(".key:not(#btn-clear):not(#btn-clear):not(#backSpaceBtn):not(#evaluate)");
const display = document.querySelector("#display");
const evaluateBtn = document.querySelector("#evaluate");
const clearBtn = document.querySelector("#btn-clear");
const backSpaceBtn = document.querySelector("#backSpaceBtn");


keysBtn.forEach(x => {
    x.addEventListener("click", () => {
        display.value += x.innerHTML;
    });
});

clearBtn.addEventListener('click', () => display.value = "");

evaluateBtn.addEventListener("click", () =>{
    try {
        display.value = eval(display.value);

    } catch(error) {
        display.value = "ERROR";
    }
});

document.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        evaluateBtn.click(); // call event SUPPER
    } else if(event.key == "Backspace"){
        backSpaceBtn.click();
    }
    else{
        display.focus();
    }
});

backSpaceBtn.addEventListener("click", () => {
    display.value = display.value.toString().slice(0,-1);
});
