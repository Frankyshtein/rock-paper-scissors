let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}
function win(user, comp) {
    const currrentElem = document.getElementById(user)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user) + ' (user) '.sub().fontcolor('#e2584d')} beats ${convertToWord(comp) + ' (comp) '.sub().fontcolor('#e2584d')}. You win!🔥`;
    currrentElem.classList.add('win');
    setTimeout(() => currrentElem.classList.remove('win'), 700);
}
function lose(user, comp) {
    const currrentElem = document.getElementById(user)
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user) + ' (user) '.sub().fontcolor('#e2584d')} beats ${convertToWord(comp) + ' (comp) '.sub().fontcolor('#e2584d')}. You lost!💩`;
    currrentElem.classList.add('lost');
    setTimeout(() => currrentElem.classList.remove('lost'), 700);
}
function draw(user, comp) {
    const currrentElem = document.getElementById(user)
    result_p.innerHTML = `${convertToWord(user) + ' (user) '.sub().fontcolor('#e2584d')} beats ${convertToWord(comp) + ' (comp) '.sub().fontcolor('#e2584d')}. It's a draw!🏆`;
    currrentElem.classList.add('draw');
    setTimeout(() => currrentElem.classList.remove('draw'), 700);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'pr':
        case 'sp':
        case 'rs':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }    
}

(function () {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}());