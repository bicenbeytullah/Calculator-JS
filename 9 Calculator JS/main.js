let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button=>{
    button.addEventListener("click", calculate => {
        let btn = button.innerText;
        console.log(btn);
        if ( btn === "C" ) {
            display.innerText = " ";
            return; 
        }
        if ( btn === "=" ) {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "EROR!!!" 
            } 
            return;
        }
        if ( btn === "←" ) {
            display.innerText = display.innerText.slice(0, -1);
            return; 
        }
        else {
            display.innerText += btn;
            return;
        } 
    });
});



/*let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));*/


/* <---23.06--->buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch  {
                    display.innerText = "EROR!!!"   
                }
                break;
            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += e.target.innerText;            

        }

    });
});*/

/*function calculate () {
    let btn = this.innerText;
    if(btn === "C" ) {
        display.innerText = " ";
        return;      
    }
    if(btn === "="){
        display.innerText = eval(display.innerText);
        return;
    }
    if (btn === "←") {
        display.innerText = display.innerText.slice(0, -1);
    }else{
        display.innerText += btn;
        return;
    } 

};*/
    
/*buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText = "";
                break;
            case "=":
               try {
                display.innerText = eval(display.innerText);
                   
               } catch  {
                   display.innerText = "Eror!!"
                   
               }
                break;
            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += e.target.innerText;           
        }

    });
});*/


