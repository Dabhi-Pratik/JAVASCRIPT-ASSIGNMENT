document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const number = document.getElementById("num").value
    const result = document.getElementById("result")

    if (number === "") {
        result.innerHTML = "<h3>Please Enter a Number!</h3>"
        return;
    }

    const num = Number(number);
    let isPrime = true;

    // ⭐ Special case for number 1
    if (num === 1) {
        result.innerHTML = "<h3>1 is neither Prime nor Composite.</h3>";
        return;
    }

    if (num < 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false
                break;
            }
        }
    }

    if (isPrime) {
        result.innerHTML = `<h3>${num} is a Prime Number</h3>`;
    } else {
        result.innerHTML = `<h3>${num} is NOT a Prime Number</h3>`;
    }


})