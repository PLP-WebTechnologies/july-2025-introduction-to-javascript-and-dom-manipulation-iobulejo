  
    /************************************************************
     * Mastering JavaScript Basics
     * Goal: Demonstrate variables, data types, operators,
     *       conditionals, input/output
     ************************************************************/

    // 1. Variables and Data Types
    let userName = prompt("Enter your name:");      // String
    let age = parseInt(prompt("Enter your age:"));  // Number

    // 2. Operators
    let nextYearAge = age + 1;  // Addition operator
    let isAdult = age >= 18;    // Comparison operator returns boolean

    // 3. Conditionals
    let message = "";
    if (isAdult) {
      message = "Hello " + userName + "! You are an adult.";
    } else {
      message = "Hello " + userName + "! You are still a minor.";
    }

    // 4. Output results
    console.log("User: " + userName);
    console.log("Age now: " + age);
    console.log("Age next year: " + nextYearAge);
    console.log(message);

    // Display result on webpage
    document.getElementById("result").innerText =
      `${message} Next year you will be ${nextYearAge} years old.`;
 
      /************************************************************
     * Example 1: Function to calculate total price
     ************************************************************/
    function calculateTotal(price, quantity) {
      return price * quantity;
    }

    let total = calculateTotal(5, 3); // 5 * 3 = 15
    document.getElementById("result1").innerText =
      `Total Price: $${total}`;

    /************************************************************
     * Example 2: Function to format strings (capitalize name)
     ************************************************************/
    function formatName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    let formatted = formatName("joHn");
    document.getElementById("result2").innerText =
      `Formatted Name: ${formatted}`;

    /************************************************************
     * Example 3: Function to check if a number is even or odd
     ************************************************************/
    function checkEvenOdd(number) {
      if (number % 2 === 0) {
        return `${number} is Even`;
      } else {
        return `${number} is Odd`;
      }
    }

    let check = checkEvenOdd(7);
    document.getElementById("result3").innerText = check;

    /************************************************************
     * Example 4: Function to toggle content visibility
     ************************************************************/
    function toggleContent() {
      let el = document.getElementById("result4");

      if (el.innerText === "") {
        el.innerText = "🎉 Hello, this is toggled content!";
      } else {
        el.innerText = "";
      }
    }

    /************************************************************
     * Example 1: FOR loop – Generate boxes with numbers 1–5
     ************************************************************/
    let forOutput = "";
    for (let i = 1; i <= 5; i++) {
      forOutput += `<span class="box">${i}</span>`;
    }
    document.getElementById("forLoopResult").innerHTML = forOutput;

    /************************************************************
     * Example 2: WHILE loop – Simple countdown
     ************************************************************/
    let whileOutput = "";
    let count = 5;
    while (count > 0) {
      whileOutput += `Countdown: ${count}<br>`;
      count--;
    }
    document.getElementById("whileLoopResult").innerHTML = whileOutput + "🚀 Blast off!";

    /************************************************************
     * Example 3: forEach – Loop through an array of fruits
     ************************************************************/
    let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍍 Pineapple"];
    let list = document.getElementById("forEachResult");

    fruits.forEach(function(fruit) {
      let li = document.createElement("li");
      li.textContent = fruit;
      list.appendChild(li);
    });

    /************************************************************
     * Example 1: Change text when a button is clicked
     ************************************************************/
    const title = document.getElementById("title");
    const changeTextBtn = document.getElementById("changeTextBtn");

    changeTextBtn.addEventListener("click", function() {
      title.textContent = "🎉 The title has been changed!";
    });

    /************************************************************
     * Example 2: Toggle a CSS class
     ************************************************************/
    const toggleClassBtn = document.getElementById("toggleClassBtn");

    toggleClassBtn.addEventListener("click", function() {
      title.classList.toggle("highlight");
    });

    /************************************************************
     * Example 3: Dynamically create new elements (Task List)
     ************************************************************/
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
      if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        li.classList.add("task");
        taskList.appendChild(li);
        taskInput.value = ""; // clear input
      }
    });

    /************************************************************
     * Example 4: Simple click counter
     ************************************************************/
    let counter = 0;
    const counterBtn = document.getElementById("counterBtn");
    const counterDisplay = document.getElementById("counterDisplay");

    counterBtn.addEventListener("click", function() {
      counter++;
      counterDisplay.textContent = `You’ve clicked ${counter} times.`;
    });