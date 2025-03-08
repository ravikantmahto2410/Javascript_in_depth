let randomNumber = (parseInt(Math.random() * 100  + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playgame = true

if(playgame){
  submit.addEventListener('click', function(chai){
    chai.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess);
  })
}
function validateGuess(guess){
// this will just validate whether the value is in Range [1,100] also it will check whether it is a number or not
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess < 1){
    alert('Please enter a number greater than 1')
  }
  else if(guess < 1){
    alert('Please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      cleanUpGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      cleanUpGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //check guess will help to ensure whether guess is equal to random number or not , if its equal then using display message display message that you have won the game 
  if(guess === randomNumber) {
    displayMessage('You guessed it right')
    endGame()
  }
  else if (guess < randomNumber){
    displayMessage('Number is Too Low')
  }
  else if(guess > randomNumber) {
    displayMessage('Number is Too High')
  }
}

function cleanUpGuess(guess){
  // this will clean the guess, update the array, update the remaining guesses count
  userInput.value =''
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`

}
function displayMessage(message){
  //this will interact with 
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
  //
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game<h2/>`
  startOver.appendChild(p)
  playgame = false;
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(superman){
    randomNumber = (parseInt(Math.random() * 100  + 1))
    playGuess =[]
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playgame = true
  })
}