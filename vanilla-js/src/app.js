const currying = (x) => (y) => x + y;

console.log(currying(5)(6));

function curry(x) {
  return function(y) {
    return x + y;
  }
}
console.log(curry(5)(6));