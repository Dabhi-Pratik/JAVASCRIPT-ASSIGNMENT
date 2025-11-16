// generate random number 1-100

let secret = Math.floor(Math.random()*100)+1;

document.getElementById("btn").addEventListener("click",() =>{

    let guess = Number(document.getElementById("guess").value)
    let msg = document.getElementById("msg")

    if(!guess){
        msg.textContent ="Please Enter a Number";
        return;
    }

    if(guess < secret){
        msg.textContent ="Too Low......!"
    }
    else if(guess > secret){
        msg.textContent ="Too High......!"
    }else{
        msg.textContent="🎉 Correct! You guessed it!";
    }
})  