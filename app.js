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
            display.value += result;
        }
        else if(value === "c"){
            display.value= "";
        }

    })
    
}


// const calculation = () => {

//     let arr = display.value.split('');
//     console.log (arr);

//     let currentValue= "";
//     let initailValue = [];
//     let finalValue =[];
//     let opretor = [];

//     for(let i=0; i<=arr.length-1; i++){
        
//         let num = arr[i];

//         if(num >= '0' && num <= '9'){
//             currentValue += num ;
//            // console.log (currentValue);

//         } else if(num ==='+' || num ==='-' || num ==='*' || num ==='/'){
           
//              initailValue.push(Number(currentValue));
//              console.log (currentValue);
//              opretor.push(num);
//              currentValue = "";
             
//         }

//            console.log(opretor);
//            console.log(initailValue);

//         }

//          if(currentValue!== ""){
//             finalValue.push(Number(currentValue));

//             console.log(finalValue);
//             console.log (currentValue);

//          } 

//          if(opretor="+"){
//             initailValue + finalValue;
//          }
    
// }