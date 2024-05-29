// Global variables
let num1 = 1, num2 = 1, operator = "add", operatorStored = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Event handler function
function eventHandler(event) {
    let currentTargetID = event.currentTarget.getAttribute("id");
    switch(true) {
        case /^n[0-9]+$/.test(currentTargetID):
            // Function for the number
            break;
        
        case (currentTargetID === "clear"):
            break;

        case (currentTargetID === "equal"):
            break;

        default:


    }
}

function addNumber(id) {
    let screen = document.querySelector(".screen");
    screen.textContent = screen.textContent + id.charAt(1);
}

function addOperator(id) {
    
    switch(id) {
        case "multply":
    }
}