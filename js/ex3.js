const r = Number(prompt("Enter the circle radius:"));
const circle = {
   radius: r
}
circle.circumference = function() {
    return 2 * Math.PI * this.radius;
}
circle.area = function() {
  return Math.pow( Math.PI * this.radius, 2 );
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);