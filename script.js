/******************************
GET/PRINT HISTORY FUNCTIONS
******************************/

// Return history via the inner text of <p> with the id "history-value"
function getHistory() {
    return document.getElementById("history-value").innerText;
}

// When called this function replaces whatever is in <p id="history-value"> with "myParameter"
function printHistory(myParameter) {
    document.getElementById("history-value").innerText = myParameter;
}

/******************************
GET OUTPUT FUNCTION
******************************/

// Return output via the innerText of <p> with the id "output-value"
function getOutput(){
    return document.getElementById("output-value").innerText;
}

/******************************
PRINT/FORMAT OUTPUT (CONNECTED)
******************************/

// When called this function replaces whatever's in <p id="output-value"> with "myParameter"
function printOutput(myParameter) {
    // We nest a new function call inside --> this enables us to add commas to the value via that functio (addCommasToOutput)
    document.getElementById("output-value").innerText = addCommasToOutput(myParameter);
}

// This function contains the logic necessary to add commas (built in methods ....)
function addCommasToOutput(myParameter) {
    // Make sure the value is a number
    var myValue = Number(myParameter);
    // The toLocaleString() method with "en" automatically adds commas
    var formattedValue = myValue.toLocaleString("en");
    // Calling printOuput(myParameter) will return 
    return formattedValue;
}


// TESTING IT WORKS
printOutput(1000000)



/******************************
IMPLEMENT OPERATIONS
******************************/




