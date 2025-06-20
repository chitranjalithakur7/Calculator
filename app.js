let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "=") {
            input.value = eval(input.value); // Calculate result
        } 
        else if (value === "AC") {
            input.value = ""; // Clear input
        } 
        else if (value === "DEL") {
            input.value = input.value.slice(0, -1); // Delete last character
        } 
        else {
            input.value += value; // Append button text to input
        }
    });
});
