let zeroBtn = document.querySelector('#calc__0');
let oneBtn = document.querySelector('#calc__1');
let twoBtn = document.querySelector('#calc__2');
let threeBtn = document.querySelector('#calc__3');
let fourBtn = document.querySelector('#calc__4');
let fiveBtn = document.querySelector('#calc__5');
let sixBtn = document.querySelector('#calc__6');
let sevenBtn = document.querySelector('#calc__7');
let eightBtn = document.querySelector('#calc__8');
let nineBtn = document.querySelector('#calc__9');

let equalBtn = document.querySelector('#calc__equals');
let plusBtn = document.querySelector('#calc__plus');
let minusBtn = document.querySelector('#calc__minus');
let multiplyBtn = document.querySelector('#calc__multiply');
let devideBtn = document.querySelector('#calc__divide');

let clearBtn = document.querySelector('#calc__clear');
let backspaceBtn = document.querySelector('#calc__backspace');
let displayValElement = document.querySelector('#calc__display-val');
let descimalBtn = document.querySelector('#calc__decimal');

let displayVal = '0'; //value which got typed in
let pendingVal; // 5 + 3 --> 5 = pendingVal and 3 displayVal 
let evalStringArray = []; // holds for example 3 + 3

let numBtn = document.querySelectorAll('.calc__btn');
let opBtn = document.querySelectorAll('.calc__btn-op');

function calc() {
    pendingVal = displayVal; //stores value which got typed in before op button got pressed  
    displayVal = '0'; // after op button got pressed displayVal = 0
    displayValElement.innerText = pendingVal; //value still gets displayed after op button got pressed 
    evalStringArray.push(pendingVal); //push value into Array (value before the execution of an op button)
}

function calc1() {
    if (displayVal === '0') {
        displayVal = ''; 
    }
    displayVal += event.key; //displayVal = displayVal + btnText (value which gets typed in)
    displayValElement.innerText = displayVal;
}

for (let i = 0; i < numBtn.length; i++) { // click events for numbers
    numBtn[i].addEventListener('click', function () {
        var btnText = this.innerText;
        if (displayVal === '0') {
            displayVal = ''; 
        }
        displayVal += btnText; //displayVal = displayVal + btnText  btnText (value which get typed in)
        displayValElement.innerText = displayVal;
        numBtn[i].classList.add('toggle'); //animation for numbers 
        setTimeout(function () {
            numBtn[i].classList.remove('toggle');
        }, 100)

    });
}

for (let i = 0; i < opBtn.length; i++) { //click events for op buttons
    opBtn[i].addEventListener('click', function () {
        var operator = this.innerText;
        makeCalculation(operator);
        opBtn[i].classList.add('toggle'); // animation for op
        setTimeout(function () {
            opBtn[i].classList.remove('toggle');
        }, 100)
    });
}

document.addEventListener('keydown', function (event) { //KeyDown Events
    makeCalculation(event.key);

})

function clear() {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
    clearBtn.classList.add('toggle');
    setTimeout(function () {
        clearBtn.classList.remove('toggle');
    }, 100)
}

clearBtn.onclick = () => { //clear button functionality
    clear();

}

function backSpace() {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    if (displayVal === '') {
        displayVal = '0';
    }
    displayValElement.innerText = displayVal; //displaying current value
    backspaceBtn.classList.add('toggle');
    setTimeout(function () {
        backspaceBtn.classList.remove('toggle');
    }, 100)
}

backspaceBtn.onclick = () => { //backspace functionality
    backSpace();

}

function decimalCase() {
    if (!displayVal.includes('.')) {

        displayVal += '.';
        displayValElement.innerText = displayVal;
    }
    descimalBtn.classList.add('toggle');
    setTimeout(function () {
        descimalBtn.classList.remove('toggle');
    }, 100)

}

descimalBtn.onclick = () => { // two . are not possible anymore
    decimalCase();
}

function makeCalculation(key) {
    switch (key) {
        case '+':
            calc();
            plusBtn.classList.add('toggle');
            setTimeout(function () {
                plusBtn.classList.remove('toggle')
            }, 100)
            evalStringArray.push('+'); //push operator into array
            break;

        case '-':
            calc();
            minusBtn.classList.add('toggle');
            setTimeout(function () {
                minusBtn.classList.remove('toggle')
            }, 100)
            evalStringArray.push('-'); //push operator into array
            break;
        case 'x':
        case '*':
            calc();
            multiplyBtn.classList.add('toggle');
            setTimeout(function () {
                multiplyBtn.classList.remove('toggle')
            }, 100)
            evalStringArray.push('*'); //push operator into array
            break;
        case '÷':
        case '/':
            calc();
            devideBtn.classList.add('toggle');
            setTimeout(function () {
                devideBtn.classList.remove('toggle')
            }, 100)
            evalStringArray.push('/'); //push operator into array
            break;
        case '=':
            equalBtn.classList.add('toggle');
            setTimeout(function () {
                equalBtn.classList.remove('toggle')
            }, 100)
            evalStringArray.push(displayVal); //push last value which got typed in into array 
            var evaluation = eval(evalStringArray.join('')); //z.B [5, '+', 3] transformed to '5 + 3'
            displayVal = evaluation;
            displayValElement.innerText = displayVal; //display result
            evalStringArray = []; //array reset 
            displayVal = '0';
            break;
        case '0':
            calc1();
            zeroBtn.classList.add('toggle');
            setTimeout(function () {
                zeroBtn.classList.remove('toggle')
            }, 100)
            break;
        case '1':
            calc1();
            oneBtn.classList.add('toggle');
            setTimeout(function () {
                oneBtn.classList.remove('toggle')
            }, 100)
            break;
        case '2':
            calc1();
            twoBtn.classList.add('toggle');
            setTimeout(function () {
                twoBtn.classList.remove('toggle')
            }, 100)
            break;
        case '3':
            calc1();
            threeBtn.classList.add('toggle');
            setTimeout(function () {
                threeBtn.classList.remove('toggle')
            }, 100)
            break;
        case '4':
            calc1();
            fourBtn.classList.add('toggle');
            setTimeout(function () {
                fourBtn.classList.remove('toggle')
            }, 100)
            break;
        case '5':
            calc1();
            fiveBtn.classList.add('toggle');
            setTimeout(function () {
                fiveBtn.classList.remove('toggle')
            }, 100)
            break;
        case '6':
            calc1();
            sixBtn.classList.add('toggle');
            setTimeout(function () {
                sixBtn.classList.remove('toggle')
            }, 100)
            break;
        case '7':
            calc1();
            sevenBtn.classList.add('toggle');
            setTimeout(function () {
                sevenBtn.classList.remove('toggle')
            }, 100)
            break;
        case '8':
            calc1();
            eightBtn.classList.add('toggle');
            setTimeout(function () {
                eightBtn.classList.remove('toggle')
            }, 100)
            break;
        case '9':
            calc1();
            nineBtn.classList.add('toggle');
            setTimeout(function () {
                nineBtn.classList.remove('toggle')
            }, 100)
            break;
        case '.':
            decimalCase();
            break;
        case 'Escape':
            clear();
            break;
        case 'Backspace':
            backSpace();
            break;
        default:
            break;
    }
}

// JavaScript Clock

const secondHand = document.querySelector('.watch__second');
const minuteHand = document.querySelector('.watch__minute');
const hourHand = document.querySelector('.watch__hour');
const hands = document.querySelectorAll('.hand');

function setDate() {

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds === 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
        hands.forEach(hand => hand.style.transitionDuration = '0.05s');
    }
}

setInterval(setDate, 1000);