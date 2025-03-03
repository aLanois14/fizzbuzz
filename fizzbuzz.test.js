const fizzBuzz = require("./fizzbuzz");

describe("FizzBuzz Tests - Divisibilité par 5 seulement", () => {
  test("Renvoie 'buzz' si divisible par 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(10)).toBe("buzz");
    expect(fizzBuzz(15)).toBe("buzz");
    expect(fizzBuzz(30)).toBe("buzz");
  });

  test("Renvoie le nombre lui-même si non divisible par 5", () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(3)).toBe(3);
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(6)).toBe(6);
    expect(fizzBuzz(7)).toBe(7);
  });
});
