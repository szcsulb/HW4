let calculate = document.getElementById('calculate');
var sumInts = function( int1, int2 ) {
  return parseInt( int1 ) + parseInt( int2 );
}

var subInts = function( int1, int2 ) {
  return parseInt( int1 ) - parseInt( int2 );
}

var mulInts = function( int1, int2 ) {
  return parseInt( int1 ) * parseInt( int2 );
}

var divInts = function( int1, int2 ) {
  return ( parseInt( int2 ) == 0 ) ? 'Indivisible' : parseInt( int1 ) / parseInt( int2 );
}
var getOperator = function() {
  let ele = document.getElementsByName('operator');
  for(i = 0; i < ele.length; i++) {
    if( ele[i].checked ) return ele[i].value;
  }
}
calculate.onclick = function ( e ) {
  e.preventDefault();
  let int1 = parseInt( document.getElementById('int1').value );
  let int2 = parseInt( document.getElementById('int2').value );
  let result, op = '';
  let checkedOperator = getOperator();
  switch( checkedOperator )
  {
    case 'sum':
      result = sumInts( int1, int2 );
      op = '+';
    break;
    case 'sub':
      result = subInts( int1, int2 );
      op = '-';
      break;
    case 'mul':
      result = mulInts( int1, int2 );
      op = '*';
    break;
    case 'div':
      result = divInts( int1, int2 );
      op = '/';
    break;
  }
  let message = `${int1} ${op} ${int2} = ${result}`;

  document.getElementById( 'calculateMsg' ).innerHTML = message;
}