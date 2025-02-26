
const screen = document.querySelector('.screen');

let numArr = [];
let firstString = 0;
let firstNum;

let secondNum = 0;
let total = 0;
const content = document.createElement('div');
content.classList.add('content');

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    
     numArr.push(7);
 
    console.log(numArr);
    //console.log(printedNum);
    //firstNum = printedNum;
    //console.log(firstNum);
    //total = (firstNum + 2);
    let printedNum = numArr.join('');

    firstString += printedNum[printedNum.length-1];
    console.log(firstString);
  

    content.textContent = printedNum;
    screen.appendChild(content);
    //let floatArray = stringArray.map(parseFloat);
    
});



const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {

    numArr = [];
    firstString = 0;
    screen.removeChild(content);
})




const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    console.log('plus');
    firstNum = parseFloat(firstString);

    console.log(firstNum);


});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    let total = firstNum + 2;
    console.log(total);
})