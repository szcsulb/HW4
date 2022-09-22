var words = []
var word;
do
{
  word = prompt("Enter a word, or 'stop' to stop.");
  if( word.toLowerCase() == 'stop' )
    break;
  else
    words.push( word );
} while( word.toLowerCase() != 'stop' )

message = ( words.length > 0 ) ? words.join( ', ' ) : 'You did not enter any words.';
document.getElementById( 'wordsMsg' ).innerHTML = message; 