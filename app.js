let display = document.getElementById("display");

let button = document.querySelectorAll(".btn");

for (let i = 0; i < button.length; i++) {
    let btn = button[i];

    btn.addEventListener("click", () => {
        let value = btn.textContent;
        console.log (value);
        display.value += value;
        if(value==="c"){
            display.value= "";
        }
    })

    
    
}