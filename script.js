function getComputerOptions(params) {
    const comp = Math.random();

    if(comp < 0.34) return 'scissors';
    if(comp >= 0.34 && comp < 0.67) return 'rock';

    return 'paper';
}

function getResult(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'scissors') return (comp == 'paper') ? 'MENANG!' : 'KALAH!';
    if (player == 'paper') return (comp == 'rock') ? 'MENANG!' : 'KALAH!';
    if (player == 'rock') return (comp == 'scissors') ? 'MENANG!' : 'KALAH!';
}

const playerScissors = document.querySelector('.scissors');
playerScissors.addEventListener('click', function () {
    const computerOptions = getComputerOptions();
    const playerOptions = playerScissors.className.toString().split(/\s+/)[2];
    const result = getResult(computerOptions, playerOptions);
    console.log('comp : ' +computerOptions);
    console.log('player : ' +playerOptions);
    console.log('result : ' +result);

    const backgroundComputer = document.querySelector('.board-games__computer-selection');
    const imgComputer = document.querySelector('.board-games__images-computer');

    if(computerOptions == 'scissors') {
        imgComputer.setAttribute('src', 'image/cut-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-scissors');
        backgroundComputer.classList.remove('board-games__images-computer-rock', 'board-games__images-computer-paper');
    } else if(computerOptions == 'rock') {
        imgComputer.setAttribute('src', 'image/rock-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-rock');
        backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-paper');
    } else {
        imgComputer.setAttribute('src', 'image/paper-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-paper');
        backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-rock');
    }

    const resultInfo = document.getElementsByClassName("board-games__info-result")[0];
    resultInfo.innerHTML = result;
});

const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', function () {
    const computerOptions = getComputerOptions();
    const playerOptions = playerRock.className.toString().split(/\s+/)[2];
    const result = getResult(computerOptions, playerOptions);
    console.log('comp : ' +computerOptions);
    console.log('player : ' +playerOptions);
    console.log('result : ' +result);

    const backgroundComputer = document.querySelector('.board-games__computer-selection');
    const imgComputer = document.querySelector('.board-games__images-computer');

    if(computerOptions == 'scissors') {
        imgComputer.setAttribute('src', 'image/cut-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-scissors');
        backgroundComputer.classList.remove('board-games__images-computer-rock', 'board-games__images-computer-paper');
    } else if(computerOptions == 'rock') {
        imgComputer.setAttribute('src', 'image/rock-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-rock');
        backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-paper');
    } else {
        imgComputer.setAttribute('src', 'image/paper-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-paper');
        backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-rock');
    }

    const resultInfo = document.getElementsByClassName("board-games__info-result")[0];
    resultInfo.innerHTML = result;
});

const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', function () {
    const computerOptions = getComputerOptions();
    const playerOptions = playerPaper.className.toString().split(/\s+/)[2];
    const result = getResult(computerOptions, playerOptions);
    console.log('comp : ' +computerOptions);
    console.log('player : ' +playerOptions);
    console.log('result : ' +result);

    const backgroundComputer = document.querySelector('.board-games__computer-selection');
    const imgComputer = document.querySelector('.board-games__images-computer');

    if(computerOptions == 'scissors') {
        imgComputer.setAttribute('src', 'image/cut-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-scissors');
        backgroundComputer.classList.remove('board-games__images-computer-rock', 'board-games__images-computer-paper');
    } else if(computerOptions == 'rock') {
        imgComputer.setAttribute('src', 'image/rock-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-rock');
        backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-paper');
    } else {
        imgComputer.setAttribute('src', 'image/paper-hand.png');
        backgroundComputer.classList.add('board-games__images-computer-paper');
        backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-rock');
    }

    const resultInfo = document.getElementsByClassName("board-games__info-result")[0];
    resultInfo.innerHTML = result;
});