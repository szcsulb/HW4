var analyze = document.getElementById( 'analyze' );
const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; 
// The assignment says to use a loop. A loop makes no sense for this task.
vowelCheck = function( char )
{
  return ( vowels.indexOf( char.toLowerCase() ) !== -1 )
}
palindromeCheck = function( word ) {
  let mirror = word.toLowerCase().split('').reverse().join('');
  return mirror === word.toLowerCase();
}

analyze.onclick = function ( e ) {
  e.preventDefault();
  let word = document.getElementById( 'word' ).value;
  let expanded = word.split( '' );
  let message = '';
  let vwls = 0;
  for( var i = 0; i < expanded.length; i++ )
  {
    if( vowelCheck( expanded[i] ) ) vwls++;
  }
  let palindrome = ( palindromeCheck( word ) ) ? '' : ' not';
  message = `${word} contains ${vwls} vowels and is${palindrome} a palindrome.`
  document.getElementById( 'analyzeMsg' ).innerHTML = message; 

}