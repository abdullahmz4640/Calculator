let display = document.getElementById("display");

let button = document.querySelectorAll(".btn");

let result=0;

for (let i = 0; i < button.length; i++) {
    let btn = button[i];

    btn.addEventListener("click", () => {
        let value = btn.textContent;
        console.log (value);
        display.value += value;

        if(value === "="){
            let op =  display.value.slice(-1);

            display.value = display.value.slice(0, -1);

            result = eval(display.value);
            console.log(result);
            display.value = "";
            display.value = result;
        }

         if(value === "c"){
            display.value= "";
         }

    })
    
}


