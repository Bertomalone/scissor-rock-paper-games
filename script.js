function getComputerOptions(params) {
    const comp = Math.random();

    if(comp < 0.34) return 'cut-hand';
    if(comp >= 0.34 && comp < 0.67) return 'rock-hand';

    return 'paper-hand';
}

function getResult(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'cut-hand') return (comp == 'paper-hand') ? 'MENANG!' : 'KALAH!';
    if (player == 'paper-hand') return (comp == 'rock-hand') ? 'MENANG!' : 'KALAH!';
    if (player == 'rock-hand') return (comp == 'cut-hand') ? 'MENANG!' : 'KALAH!';
}

function putar() {
    const imageComputer = document.querySelector('.board-games__images-computer');
    const images = ['cut-hand', 'rock-hand', 'paper-hand'];
    let i = 0;
    const startTime = new Date().getTime();

    setInterval(function() {
        if(new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }

        imageComputer.setAttribute('src', 'image/' + images[i++] + '.png');

        if(i == images.length) i = 0;
    }, 100)

}

const playerSelectors = document.querySelectorAll('.board-games__player-selection');
playerSelectors.forEach(function (selectorsItem) {
    selectorsItem.addEventListener('click', function() {
        const computerOptions = getComputerOptions();
        const playerOptions = selectorsItem.className.toString().split(/\s+/)[2];
        const result = getResult(computerOptions, playerOptions);
        console.log('comp : ' +computerOptions);
        console.log('player : ' +playerOptions);
        console.log('result : ' +result);

        putar();

        const backgroundComputer = document.querySelector('.board-games__computer-selection');
        const imgComputer = document.querySelector('.board-games__images-computer');

        setTimeout(function() {
            imgComputer.setAttribute('src', 'image/' +computerOptions+ '.png');
            if(computerOptions == 'cut-hand') {
                backgroundComputer.classList.add('board-games__images-computer-scissors');
                backgroundComputer.classList.remove('board-games__images-computer-rock', 'board-games__images-computer-paper');
            } else if(computerOptions == 'rock-hand') {
                backgroundComputer.classList.add('board-games__images-computer-rock');
                backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-paper');
            } else {
                backgroundComputer.classList.add('board-games__images-computer-paper');
                backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-rock');
            }

            const resultInfo = document.getElementsByClassName("board-games__info-result")[0];
            resultInfo.innerHTML = result;
        }, 1000);
        
    });
});

// const playerScissors = document.querySelector('.scissors');
// playerScissors.addEventListener('click', function () {
//     const computerOptions = getComputerOptions();
//     const playerOptions = playerScissors.className.toString().split(/\s+/)[2];
//     const result = getResult(computerOptions, playerOptions);
//     console.log('comp : ' +computerOptions);
//     console.log('player : ' +playerOptions);
//     console.log('result : ' +result);

//     const backgroundComputer = document.querySelector('.board-games__computer-selection');
//     const imgComputer = document.querySelector('.board-games__images-computer');

//     if(computerOptions == 'scissors') {
//         imgComputer.setAttribute('src', 'image/cut-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-scissors');
//         backgroundComputer.classList.remove('board-games__images-computer-rock', 'board-games__images-computer-paper');
//     } else if(computerOptions == 'rock') {
//         imgComputer.setAttribute('src', 'image/rock-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-rock');
//         backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-paper');
//     } else {
//         imgComputer.setAttribute('src', 'image/paper-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-paper');
//         backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-rock');
//     }

//     const resultInfo = document.getElementsByClassName("board-games__info-result")[0];
//     resultInfo.innerHTML = result;
// });

// const playerRock = document.querySelector('.rock');
// playerRock.addEventListener('click', function () {
//     const computerOptions = getComputerOptions();
//     const playerOptions = playerRock.className.toString().split(/\s+/)[2];
//     const result = getResult(computerOptions, playerOptions);
//     console.log('comp : ' +computerOptions);
//     console.log('player : ' +playerOptions);
//     console.log('result : ' +result);

//     const backgroundComputer = document.querySelector('.board-games__computer-selection');
//     const imgComputer = document.querySelector('.board-games__images-computer');

//     if(computerOptions == 'scissors') {
//         imgComputer.setAttribute('src', 'image/cut-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-scissors');
//         backgroundComputer.classList.remove('board-games__images-computer-rock', 'board-games__images-computer-paper');
//     } else if(computerOptions == 'rock') {
//         imgComputer.setAttribute('src', 'image/rock-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-rock');
//         backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-paper');
//     } else {
//         imgComputer.setAttribute('src', 'image/paper-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-paper');
//         backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-rock');
//     }

//     const resultInfo = document.getElementsByClassName("board-games__info-result")[0];
//     resultInfo.innerHTML = result;
// });

// const playerPaper = document.querySelector('.paper');
// playerPaper.addEventListener('click', function () {
//     const computerOptions = getComputerOptions();
//     const playerOptions = playerPaper.className.toString().split(/\s+/)[2];
//     const result = getResult(computerOptions, playerOptions);
//     console.log('comp : ' +computerOptions);
//     console.log('player : ' +playerOptions);
//     console.log('result : ' +result);

//     const backgroundComputer = document.querySelector('.board-games__computer-selection');
//     const imgComputer = document.querySelector('.board-games__images-computer');

//     if(computerOptions == 'scissors') {
//         imgComputer.setAttribute('src', 'image/cut-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-scissors');
//         backgroundComputer.classList.remove('board-games__images-computer-rock', 'board-games__images-computer-paper');
//     } else if(computerOptions == 'rock') {
//         imgComputer.setAttribute('src', 'image/rock-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-rock');
//         backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-paper');
//     } else {
//         imgComputer.setAttribute('src', 'image/paper-hand.png');
//         backgroundComputer.classList.add('board-games__images-computer-paper');
//         backgroundComputer.classList.remove('board-games__images-computer-scissors', 'board-games__images-computer-rock');
//     }

//     const resultInfo = document.getElementsByClassName("board-games__info-result")[0];
//     resultInfo.innerHTML = result;
// });