/*
  Author: Kizito Akhilome
*/

(() => {
  // Computer picks its' number
  let theNum = Math.floor(Math.random() * 100) + 1;
  // Get initial user guess
  let userGuess = Number(prompt("Guess a number between 0 and 100"));
  // Get subsequent user guesses
  const getGuess = () => userGuess = Number(prompt("Guess another number"));
  // Control structure for 're-getting' user guesses if the current guess is wrong
  for(userGuess; userGuess !== theNum; getGuess()) {
    console.log(userGuess > theNum ? `${userGuess} was too High` : `${userGuess} was too Low`);
  }
  return "You win!"
})();