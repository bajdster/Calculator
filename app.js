let body = document.querySelector("body");
let header = document.querySelector("h1");
let calculator = document.querySelector(".calculator");
let screen  = document.querySelector(".screen");
let numButtons = document.querySelectorAll('.numberButton');
let opButtons = document.querySelectorAll('.operatorButton');
let equileButton = document.querySelector('.equile');
//night mode
let toggle = document.querySelector("#toggleButton");
let ball = document.querySelector(".ball");

let prevCondition = '';
let currCondition = '';
let operation;



function switchToNight()
{
    body.classList.toggle("nightBody");
    header.classList.toggle("nightHeader");
    calculator.classList.toggle("nightCalc");
    toggle.classList.toggle("active");
}

toggle.addEventListener('click', switchToNight);


function overflowHandler()
{
    if(screen.clientWidth < screen.scrollWidth)
        {
            screen.style.fontSize = "20px";
        }
}

function setNumber()
{

    if(this.classList.contains("numberButton"))
    {
        if(currCondition.length<10)
        {
            currCondition = currCondition.toString() + this.innerHTML.toString();
            console.log(currCondition)
            screen.innerHTML = currCondition;
            overflowHandler()
        }
        
    }
}

function setOperation()
{

     //reseting screen
     if(this.innerHTML == "C") 
     {
         currCondition = '';
         prevCondition = '';
         operation = '';
         screen.style.fontSize = "36px";
     }

    if(prevCondition== "")
    {
        prevCondition = currCondition;
    }
    
    currCondition = '';
    screen.innerHTML = this.innerHTML !== "C"?this.innerHTML:"0";

    console.log(prevCondition);

    switch(this.innerHTML)
    {
        case "+":
            operation = "+";
            console.log("dodaje");
            break;
        case "-":
            operation = "-";
            console.log("odejmuje");
            break;
        case "*":
            operation = "*";
            console.log("mnoże");
            break;
        case "/":
                operation = "/";
                console.log("dziele");
                break;
        case "%":
                prevCondition = parseFloat(prevCondition)/100;
                console.log(prevCondition);
                screen.innerHTML = prevCondition;
                break;
    }

}

function result()
{
    switch(operation)
    {
        case "+":
            prevCondition = parseFloat(prevCondition)+parseFloat(currCondition);
            console.log(prevCondition);
            screen.innerHTML = prevCondition;
            break;
        case "-":
            prevCondition = parseFloat(prevCondition)-parseFloat(currCondition);
            console.log(prevCondition);
            screen.innerHTML = prevCondition;
            break;
        case "*":
            prevCondition = parseFloat(prevCondition)*parseFloat(currCondition);
            console.log(prevCondition);
            screen.innerHTML = prevCondition;
            break;
        case "/":
            if(parseFloat(currCondition) == 0)
            {
                screen.innerHTML = "Div 0 Err";
                break;
            }
            prevCondition = parseFloat(prevCondition)/parseFloat(currCondition);
            console.log(prevCondition);
            screen.innerHTML = prevCondition;
            break;
       
    }
    overflowHandler();
}

numButtons.forEach(button=>button.addEventListener("click", setNumber));
opButtons.forEach(button=>button.addEventListener("click", setOperation));

equileButton.addEventListener("click", result);


