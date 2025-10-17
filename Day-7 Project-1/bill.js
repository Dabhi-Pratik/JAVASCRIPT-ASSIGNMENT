document.getElementById("calBtn").addEventListener
    ("click", function () {
        let unit = parseInt(document.getElementById("unit").value);
        let bill = 0;


        if (unit <= 100) {
            bill = unit * 10;
        } else if (unit <= 200) {
            bill = 100 * 10 + (unit - 100) * 20;
        } else if (unit > 200) {
            bill = 100 * 10 + 100 * 20 + (unit - 200) * 30;
        }

       document.getElementById("result").innerText = `Total Bill: ₹${bill}` ;
    })