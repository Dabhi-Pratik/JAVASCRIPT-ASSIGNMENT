document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();

    const number = document.getElementById("num").value
    const result = document.getElementById("result")

    if(number ===""){
        result.innerHTML = "<h3>Please Enter a Number!</h3>"
        return;
    }

    const n = Number(number);

    if(n <= 0){
        result.innerHTML=`<h3>Please Enter a Positive Number.....!</h3>`
        result;
    }

    let fib =[]
    let a =0;
    let b=1;

    for(let i=1;i<=n;i++){
        fib.push(a)
        let next = a+b;
        a=b;
        b=next;
    }

     result.innerHTML = `<h3>Fibonacci Series (${n} terms):</h3> ${fib.join(", ")}`;


})