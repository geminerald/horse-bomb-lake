const game = () => {
    let pScore = 0;
    let cScore = 0;


    //start the game

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    // Play Match

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            });
        })

        // computer's options

        const computerOptions = ['horse', 'bomb', 'lake'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];




                setTimeout(() => {
                    // Here is where we call CompareHands
                    compareHands(this.textContent, computerChoice);
                    // update images

                    playerHand.src = `./assets/images/${this.textContent}.jpg`
                    computerHand.src = `./assets/images/${computerChoice}.jpg`

                }, 2000)

                //animations
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    /**
     * Function to update the score on the game screen
     */

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
/**
 * 
 * @param {*} playerChoice 
 * @param {*} computerChoice 
 */
    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');
        // check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = `It's a tie`;
            return;
        }
        //check for rock
        if (playerChoice === 'horse') {
            if (computerChoice === 'lake') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper

        if (playerChoice === 'bomb') {
            if (computerChoice === 'horse') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        // check for scissors

        if (playerChoice === 'lake') {
            if (computerChoice === 'bomb') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
    }
    // Call all inner functions
    startGame();
    playMatch();
};

// start the game

game();