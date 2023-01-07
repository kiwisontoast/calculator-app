let result = document.getElementById("result");
        let clear = document.getElementById("clear");
        let del = document.getElementById("del");
        let divide = document.getElementById("divide");
        let seven = document.getElementById("seven");
        let eight = document.getElementById("eight");
        let nine = document.getElementById("nine");
        let multiply = document.getElementById("multiply");
        let four = document.getElementById("four");
        let five = document.getElementById("five");
        let six = document.getElementById("six");
        let subtract = document.getElementById("subtract");
        let one = document.getElementById("one");
        let two = document.getElementById("two");
        let three = document.getElementById("three");
        let add = document.getElementById("add");
        let zero = document.getElementById("zero");
        let decimal = document.getElementById("decimal");
        let equals = document.getElementById("equals");

        // Add Event Listeners
        clear.addEventListener("click", function () {
            result.value = "";
        });

        del.addEventListener("click", function () {
            result.value = result.value.substring(0, result.value.length - 1);
        });

        divide.addEventListener("click", function () {
            result.value += "/";
        });

        seven.addEventListener("click", function () {
            result.value += "7";
        });

        eight.addEventListener("click", function () {
            result.value += "8";
        });

        nine.addEventListener("click", function () {
            result.value += "9";
        });

        multiply.addEventListener("click", function () {
            result.value += "*";
        });

        four.addEventListener("click", function () {
            result.value += "4";
        });

        five.addEventListener("click", function () {
            result.value += "5";
        });

        six.addEventListener("click", function () {
            result.value += "6";
        });

        subtract.addEventListener("click", function () {
            result.value += "-";
        });

        one.addEventListener("click", function () {
            result.value += "1";
        });

        two.addEventListener("click", function () {
            result.value += "2";
        });

        three.addEventListener("click", function () {
            result.value += "3";
        });

        add.addEventListener("click", function () {
            result.value += "+";
        });

        zero.addEventListener("click", function () {
            result.value += "0";
        });

        decimal.addEventListener("click", function () {
            result.value += ".";
        });

        equals.addEventListener("click", function () {
            result.value = eval(result.value);
        });