// Part 1: Calculate Rectangle Area
function calculateArea(width, height) {
    while (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
        console.log("Please enter valid positive numbers for width and height.");
        width = parseFloat(prompt("Enter a positive number for width:"));
        height = parseFloat(prompt("Enter a positive number for height:"));
    }
    const area = width * height;
    console.log(`The area of the rectangle is: ${area}`); // Corrected string interpolation
    document.getElementById("areaResult").innerText = `Area: ${area}`; // Corrected string interpolation
}

// Example usage
calculateArea(5, 3);  // Outputs 15
calculateArea(10, 5); // Outputs 50

// Part 2: Button Click Event - Change Button Color
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorButton");

    button.addEventListener("click", function () {
        // Display alert box
        alert("Button clicked!");

        // Generate a random color
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Corrected random color generation

        // Change button color smoothly
        button.style.backgroundColor = randomColor;
    });
});

// Part 3: Manipulate List Items
document.addEventListener("DOMContentLoaded", function () {
    const ul = document.getElementById("itemList");

    // Add a new <li> when the page loads
    const newItem = document.createElement("li");
    newItem.textContent = "Fourth item";
    ul.appendChild(newItem);

    // Function to generate a random string
    function getRandomString(length = 8) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Add click event listener to all <li> items
    ul.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.textContent = getRandomString(10);
        }
    });
});

// Part 4: CSS Box Model (Box properties interaction)
document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById("boxModelDiv");

    // Change background color on click
    div.addEventListener("click", function () {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Corrected random color generation
        div.style.backgroundColor = randomColor;
    });

    // Change border color on hover
    div.addEventListener("mouseover", function () {
        const randomBorderColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Corrected random color generation
        div.style.borderColor = randomBorderColor;
    });

    // Reset border color when mouse leaves
    div.addEventListener("mouseout", function () {
        div.style.borderColor = "#333";
    });
});
