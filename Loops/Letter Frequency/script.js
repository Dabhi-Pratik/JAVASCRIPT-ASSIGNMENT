document.getElementById("btn").addEventListener("click",()=>{

    let text = document.getElementById("textbox").value.toLowerCase();
    let freq ={};

    //count letter only
    // Loop through each character
    for(let ch of text){
        if(ch >= 'a' && ch<='z'){
            freq[ch]=(freq[ch] || 0) +1;
        }
    }

    let table = document.getElementById("output");
    table.innerHTML=" ";

    // convert object → array
    let entries = Object.entries(freq);

    // If no letters found
    if(entries.length === 0){
        table.innerHTML ="<tr><td colspan='2'>No letters found</td></tr>"
        return
        
    }
    
    // Table Header
    table.innerHTML = "<tr><th>Letter</th><th>Count</th></tr>";

     // Add rows
    entries.forEach(([letter,count])=>{
            table.innerHTML +=`<tr><td>${letter}</td><td>${count}</td></tr>`
        })
})