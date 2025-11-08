document.getElementById("btn").onclick = function () {

    let f = document.getElementById("f").value;
    let c = (f - 32) * 5 / 9;
    c = c.toFixed(1)

    document.getElementById("celsius").innerHTML = "celsius: " + c + "°C"

    if (c <= 0) {
        document.getElementById("type").innerHTML = "Weather: Very Cold 🥶"
        document.getElementById("outfit").innerHTML = "outfit: Heavy jacket & gloves"
    } else if (c <= 15) {
        document.getElementById("type").innerHTML = "Weather: Cold 🤧"
        document.getElementById("outfit").innerHTML = "outfit:jacket or sweater"
    } else if (c <= 25) {
        document.getElementById("type").innerHTML = "Weather: Normal 😄"
        document.getElementById("outfit").innerHTML = "outfit: Regular clothes"
    } else if (c <= 35) {
        document.getElementById("type").innerHTML = "Weather: Hot ☀️"
        document.getElementById("outfit").innerHTML = "outfit: Light cotton clothes"
    } else {
        document.getElementById("type").innerHTML = "Weather: Very Hot 🔥"
        document.getElementById("outfit").innerHTML = "outfit: Drink Water & stay cool"
    }
}