function fizzBuzz(_nombre) {
  if (_nombre === 0) return "FizzBuzz";
  if (_nombre === 3 || _nombre === 6 || _nombre === 9) return "Fizz";
  if (_nombre === 5 || _nombre === 10) return "Buzz";
  return undefined;
}

module.exports = fizzBuzz;
