/******************************
MANIPULATE HISTORY RESULT
******************************/

// GET AND RETURN HISTORY VALUE BY ID
function getHistory(){
    return document.getElementById("history-value").innerText;
}
// PRINT HISTORY VALUE TO SCREEN
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
// TEMP PRINT TEST
printHistory("99*1-3")

/******************************
MANIPULATE OUTPUT RESULT
******************************/

//