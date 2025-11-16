document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();

    const number = document.getElementById("num").value
    const result = document.getElementById("result")

    if(number ===""){
        result.innerHTML = "<h3>Please Enter a Number!</h3>"
        return;
    }

    const num = Number(number);
    let isPrime = true;

   if(num < 0){
    result.innerHTML=`<h3>Factorial is not defined for Negative Number.....!</h3>`
    return;
   }

   let fact = 1;

   for(let i=1; i<=num; i++){
    fact *=i;
   }

   result.innerHTML=`<h3>Factorial of ${num} is ${fact}</h3>`
})