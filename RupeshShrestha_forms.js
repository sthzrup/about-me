window.addEventListener('DOMContentLoaded',function(){
    arithmetic();
    factorial();
    fibonacci();
    minMaxRange();
    mailingList();
});

function arithmetic (){
    var arithmetic = document.getElementById("arithmeticForm");
    arithmetic.addEventListener("submit", function (e){
        e.preventDefault();
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var operation = document.querySelector("input[name='operation']:checked").value;
        var resultArithmetic = document.getElementById("resultArithmetic");
        var result;

        switch (operation){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0){
                    resultArithmetic.innerHTML = "<span style='color: red;'>ERROR! Cannon divide by zero!</span>";
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultarithmetic.innerHTML = "<span style='color: red;'>Invalid Operation</span>";
                return;
        }
        resultArithmetic.innerHTML = "The result of " + num1 + " " + operation + " " + num2 + " is: " + result;
    });
}

function factorial() {
    var factorialForm = document.getElementById("factorialForm");
    factorialForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var num = parseInt(document.getElementById("factorialNumber").value);
        var resultFactorial = document.getElementById("resultFactorial");

        //Check if number is a non-negative integer
        if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
            resultFactorial.innerHTML = "<span style='color: red;'>Please enter a valid non-negative integer for factorial</span>";
            return;
        }

        var result = 1;
        for (var i = 1; i <= num; i++) {
            result *= i;
        }

        resultFactorial.innerHTML = "The factorial of " + num + " is: " + result;
    });
}

function fibonacci() {
    var fibonacciForm = document.getElementById("fibonacciForm");
    fibonacciForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var n = parseInt(document.getElementById("fibonacciNumber").value);
        var resultFibonacci = document.getElementById("resultFibonacci"); // GET the output div!

        //check if number is a non-negative integer
        if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
            resultFibonacci.innerHTML = "<span style='color: red;'>Please enter a valid non-negative integer for Fibonacci</span>";
            return;
            return;
        }

        var a = 0, b = 1, temp;
        for (var i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        var result = (n === 0) ? a : b;
        resultFibonacci.innerHTML = "The " + n + "th Fibonacci number is: " + result;
    });
}

function minMaxRange() {
    var minMaxForm = document.getElementById("minMaxForm");
    minMaxForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var num1 = parseFloat(document.getElementById("minMaxNum1").value);
        var num2 = parseFloat(document.getElementById("minMaxNum2").value);
        var num3 = parseFloat(document.getElementById("minMaxNum3").value);
        var resultMinmax = document.getElementById("resultMinmax");

        // Check if all inputs are valid
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            resultMinmax.innerHTML = "<span style='color: red;'>Please enter valid numbers for Min/Max/Range calculation.</span>";
            return;
        }

        var max = Math.max(num1, num2, num3);
        var min = Math.min(num1, num2, num3);
        var range = max - min;

        resultMinmax.innerHTML = "Max: " + max + "<br>Min: " + min + "<br>Range: " + range;
    });
}

function mailingList() {
    var mailingForm = document.getElementById("mailingForm");
    mailingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        var email = document.getElementById("email").value.trim();
        var zip = document.getElementById("zip").value.trim();
        var mailingListOutput = document.getElementById("mailingListOutput"); // get output div

        //Check if ZIP is exactly 5 digits
        if (!/^\d{5}$/.test(zip)) {
            mailingListOutput.innerHTML = "<span style='color: red;'>Please enter a valid 5-digit ZIP code.</span>";
            return;
        }

        // Basic email format check
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            mailingListOutput.innerHTML = "<span style='color: red;'>Please enter a valid email address.</span>";
            return;
        }

        var outputString = "<p><strong>Name:</strong> " + firstName + " " + lastName + " | <strong>Email:</strong> " + email + " | <strong>ZIP:</strong> " + zip + "</p>";
        mailingListOutput.innerHTML += outputString;

        mailingForm.reset();
    });
}