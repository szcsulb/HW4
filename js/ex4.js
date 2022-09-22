const values = [3, 11, 7, 2, 9, 10];
var iterate = document.getElementById('iterate');
var sumOfValues = function() {
  let sum = 0;
  for( var i = 0; i < values.length; i++ ) {
    sum += values[i];
  }
  return sum;
}
var minValue = function() {
  let min = values[0];
  for( var i = 0; i < values.length; i++ ) {
    min = ( values[i] < min ) ? values[i] : min;
  }
  return min;
}
var maxValue = function() {
  let max = values[0];
  for( var i = 0; i < values.length; i++ ) {
    max = ( values[i] > max ) ? values[i] : max;
  }
  return max;
}
iterate.onclick = function ( e ) {
  e.preventDefault();
  theSum = sumOfValues();
  theMin = minValue();
  theMax = maxValue();
  let message = `Sum of values: ${theSum}<br />Minimum value: ${theMin}<br />Maximum value: ${theMax}`
  document.getElementById( 'iterateMsg' ).innerHTML = message;
}