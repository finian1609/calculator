//object model discussion and 
//(1) the BOM - Browser Object Model
//(2) the DOM - DOcument Object Model
//(3) the Global javascript model

//change ithe colour of the document on window load

window.onload = function color() {
    document.body.style.background = 'linear-gradient(to right, red,yellow,orange,green)'
    
   
}

//at the click of a button the color should change

function yellow() {
//alert('what do you want?')
    document.body.style.background = 'yellow'; 
}



function red() {
    document.body.style.background = 'red';
}

function blue() {
    document.body.style.background = 'blue'
}
//getting the result history after calculation has made'
function getHistory() {
    return document.getElementById('hvalue').innerText;
}

//get history on the screen
function printHistory(num){
    document.getElementById('hvalue').innerText = num;
} 

// Writing a function to get result
function getResult() {
    return document.getElementById('rvalue').innerText;
}

//display the result on screen
function printResult(num){
//check if the  number returns an empty string
if (num =='') {
    document.getElementById('rvalue').innerText = num;
}else{
    document.getElementById('rvalue').innerText = getFormattedNumber(num);
}
}

//check the result to be printed and declare the number into the string
function getFormattedNumber(num){
    if (num == '-') {
        return '';
    }

    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}

//create a function to seprate the stringified number by the comma
function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}

//access the functions created above at the click of a button and  display on the screen
let numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
     numbers[i].addEventListener('click', function(){ 
        result = reverseNumber(getResult());
        if (result != NaN) {
            result = result + this.innerText;
            printResult(result);

        }
     })
    
}

//carry out the sum
let operators = document.getElementsByClassName('operator');
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click',function(){
    if (this.id == 'clear'){
        printHistory('');
        printResult('');
    }else if(this.id == 'backspace'){
       let result = reverseNumber(getResult()).toString();
       if (result) {
        result = result.substring(0, result.length-1);
        printResult(result);
       }
    }else {
        var result = getResult();
        var history = getHistory();
        if (history !== "" && result == '') {
            if(isNaN(history[history.length-1])){
                history = history.substring(0, history.length-1);
             }
        }
        if (history !=''|| result != '') {
             result = result == ''?
            result:reverseNumber(result);
            history = history + result;
            if (this.id == '=') {
                history = eval(history);
                printHistory(history);
                printResult(result); 
            }else{
                    history = history + this.id;
                    printHistory(history)
                    printResult('');
                }
             }
        }
    })
}
