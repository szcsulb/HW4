var play = document.getElementById( 'play' );
// The assignment says to use a loop. A loop makes no sense for this task.
randNumber = function( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min )
}
play.onclick = function ( e ) {
  e.preventDefault();
  let r = randNumber( 1, 100 );
  let guesses = 0;
  let question = 'Enter a guess (1 to 100):';
  do
  {
    guess = Number( prompt( question ) );
    guesses++
    if( guess == r )
      break;
    else if( guess < r )
      question = 'Too low. Enter a new guess (1 to 100):';
    else if( guess > r )
      question = 'Too high. Enter a new guess (1 to 100):';
  } while( guess != r )

  document.getElementById( 'playMsg' ).innerHTML = `Correct! You guessed <strong>${guess}</strong> in ${guesses} guesses.`; 

}