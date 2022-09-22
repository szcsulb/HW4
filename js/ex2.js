var convert = document.getElementById( 'convert' );
var celcius = function( fahrenheit ) {
  return ( fahrenheit - 32 ) * ( 5 / 9 );
}
convert.onclick = function ( e ) {
  e.preventDefault();
  let fahrenheit = document.getElementById( 'fahrenheit' ).value;
  let converted = celcius( fahrenheit )
  let message = '';
  switch( fahrenheit.toString() ) {
    case '98.7':
      message = `The Fahrenheit value of ${fahrenheit} is equivalent to the Celcius value of ${converted}`;
    break;
    case '212':
      message = `Water boils at ${fahrenheit} &deg;F and ${converted} &deg;C`;
    break;
    default:
      message = `${fahrenheit} &deg;F is ${converted} &deg;C`;
    break;
  }
  document.getElementById( 'convertMsg' ).innerHTML = message; 

}