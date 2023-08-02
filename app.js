// select all squares

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

// time left and score
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomPosition() {
    // at the beginning remove any possible mole
    squares.forEach(square => square.classList.remove('mole'));

    // randomly mole position
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++;
            console.log(result)
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    // to randomly move mole with a given ID.
    // call this function after every 500 milliseconds.
    timerId = setInterval(randomPosition, 500)
}

moveMole()

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownId);
        clearInterval(timerId);
        alert('GAME OVER!, your final score is: '+ result)
    }
}

// we are going to call this function after every 1 second
let countDownId = setInterval(countDown, 1000);