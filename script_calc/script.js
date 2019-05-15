let displayValue = "0", 
    saveValue = 0, 
    operations = "0",
    pointFlag = true, 
    resultFlag = false, 
    idDisplay = document.getElementById("display");


function display() {
    idDisplay.innerHTML = displayValue; 
}

function addNumber(n) {
    if (resultFlag) {
        reset();
        resultFlag = false;
    }
    if (displayValue == "0") displayValue = n.toString();
    else displayValue += n.toString();
    display();
}

function reset() {
    displayValue = "0";
    saveValue = 0;
    display();
}

function calc() { 
    if (operations == "0") return;
    else displayValue = displayValue;
    switch(operations){
        case "+": displayValue=Number(saveValue)+Number(displayValue);
                break;
        case "-": displayValue=Number(saveValue)-Number(displayValue);
                break;
        case "/": displayValue=Number(saveValue)/Number(displayValue);
                break;
        case "*": displayValue=Number(saveValue)*Number(displayValue);
                break;
    }
    operations = "0";
    saveValue = 0;
    pointFlag=true;
    resultFlag = true;
    display();
}

function operation(op) { 
    if (operations != "0") calc(); 
    resultFlag = false;
    saveValue = displayValue;
    displayValue = 0;
    operations = op;
    pointFlag=true;
    display();
}

function backspace() { 
    if (resultFlag) { 
        reset();
        return;
    }
    if (displayValue.length === 1) displayValue = "0"; 
    else displayValue = displayValue.substring(0, displayValue.length - 1);
    display();
}
 
function point(){
    displayValue=displayValue.toString();
    if(pointFlag){
        displayValue += ".";
        pointFlag=false;
    }
    display();
}




