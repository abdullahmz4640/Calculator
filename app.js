let display = document.getElementById("display");

let button = document.querySelectorAll(".btn");

for (let i = 0; i < button.length; i++) {
    let btn = button[i];

    btn.addEventListener("click", () => {
        let value = btn.textContent;
        console.log (value);
        display.value += value;

        if(value === "c"){
            display.value= "";
        }
        calculation();

    })
    
}


const calculation = () => {

    let arr = display.value.split('');
    console.log (arr);

    let currentValue= "";
    let initailValue = [];
    let finalValue =[];
    let opretor = "" ;

    for(let i=0; i<=arr.length-1; i++){
        
        let num = arr[i];

        if(num >= '0' && num <= '9'){
            currentValue += num ;
            console.log (currentValue);

        } else if(num ==='+' || num ==='-' || num ==='*' || num ==='/'){
           
             initailValue = currentValue.map(number);
             console.log(initailValue);
        }
    } 
    
}