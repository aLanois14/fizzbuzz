const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = "FizzBuzz";

function fizzBuzz(_nombre) {
  if (_estDivisiblePar3(_nombre) && _estDivisiblePar5(_nombre)) return FIZZBUZZ;
  if (_estDivisiblePar3(_nombre)) return FIZZ;
  if (_estDivisiblePar5(_nombre)) return BUZZ;
  return undefined;
}

function _estDivisiblePar3(_nombre) {
  return _nombre % 3 === 0;
}

function _estDivisiblePar5(_nombre) {
  return _nombre % 5 === 0;
}

module.exports = { fizzBuzz, FIZZ, BUZZ, FIZZBUZZ };
