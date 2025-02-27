
const screen = document.querySelector('.screen');

let numArr = [];
let numArrTwo = [];
let firstString = 0;
let secondString = 0;
let firstNum;
let secondNum;
let total = 0;
let opSymbol;
let operatorPressed = false;
let answer;
const content = document.createElement('div');
content.classList.add('content');
const contentSecond = document.createElement('div');
contentSecond.classList.add('contentSecond');



const seven = document.querySelector('#seven');


seven.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(7);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(7);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };

});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(8);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(8);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(9);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(9);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(4);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(4);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(5);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(5);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(6);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(6);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(1);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(1);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(2);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(2);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(3);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(3);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (operatorPressed === false){
    numArr.push(0);
    let printedNum = numArr.join('');
    firstString += printedNum[printedNum.length-1];
    content.textContent = printedNum;
    } else if (operatorPressed === true){
        numArrTwo.push(0);
        let printedNumTwo = numArrTwo.join('');
        secondString += printedNumTwo[printedNumTwo.length-1];
        contentSecond.textContent = printedNumTwo;
    };
});



const operator = document.createElement('div');
operator.classList.add('operator');


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {

    numArr = [];
    numArrTwo = [];
    firstString = 0;
    secondString = 0;
 
    operatorPressed = false;
    content.textContent = '';
    operator.textContent = '';
    contentSecond.textContent = '';
    result.textContent = '';


});

const result = document.createElement('div');
result.classList.add('result');
firstNum = parseFloat(firstString);


const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    secondNum = parseFloat(secondString);
    console.log('first array' + numArr);
    console.log('second array' + numArrTwo);

    answer = getResult(firstNum, opSymbol, secondNum);
    result.textContent = answer;
    //operatorPressed = false;
    content.textContent = '';
    operator.textContent = '';
    contentSecond.textContent = '';
    numArrTwo = [];
    secondString = 0;
    
    console.log('answer' + answer);
    //numArr = [answer];



});
screen.appendChild(result);




const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (answer == undefined){
        firstNum = parseFloat(firstString);
        operator.textContent = '+';
        operatorPressed = true;
        opSymbol = '+';
    } else {
        opSymbol = '+';
        firstNum = answer;
        operator.textContent = '+';
    }

});


const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (answer == undefined){
    firstNum = parseFloat(firstString);
    operator.textContent = '-';
    operatorPressed = true;
    opSymbol = '-';
    } else {
        opSymbol = '-';
        firstNum = answer;
        operator.textContent = '-';
    }
});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    if (answer == undefined){
    firstNum = parseFloat(firstString);
    operator.textContent = '/';
    operatorPressed = true;
    opSymbol = '/';
    } else {
        opSymbol = '/';
        firstNum = answer;
        operator.textContent = '/';
    }
});
const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    if (answer == undefined){
    firstNum = parseFloat(firstString);
    operator.textContent = '*';
    operatorPressed = true;
    opSymbol = '*';
    } else {
        opSymbol = '*';
        firstNum = answer;
        operator.textContent = '*';
    }
});

function getResult(firstNumber, symbol, secondNumber){
    if (symbol == '+'){
        return firstNumber+secondNumber;
    } else if ( symbol == '-'){
        return firstNumber - secondNumber;
    } else if ( symbol == '/'){
        return firstNumber / secondNumber;
    } else if ( symbol == '*'){
        return firstNumber * secondNumber;
    } else {
        return 'ERROR';
    }
};

screen.appendChild(content);
screen.appendChild(operator);
screen.appendChild(contentSecond);
