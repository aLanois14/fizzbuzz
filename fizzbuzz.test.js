const fizzBuzz = require("./fizzbuzz");

describe("Fizz", () => {
  test("0", () => {
    //GIVEN
    const nombreDeDepart = 0;
    const resultatAttendu = "FizzBuzz";
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("1", () => {
    //GIVEN
    const nombreDeDepart = 1;
    const resultatAttendu = undefined;
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("2", () => {
    //GIVEN
    const nombreDeDepart = 2;
    const resultatAttendu = undefined;
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("3", () => {
    //GIVEN
    const nombreDeDepart = 3;
    const resultatAttendu = "Fizz";
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("4", () => {
    //GIVEN
    const nombreDeDepart = 4;
    const resultatAttendu = undefined;
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("5", () => {
    //GIVEN
    const nombreDeDepart = 5;
    const resultatAttendu = "Buzz";
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("6", () => {
    //GIVEN
    const nombreDeDepart = 6;
    const resultatAttendu = "Fizz";
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("7", () => {
    //GIVEN
    const nombreDeDepart = 7;
    const resultatAttendu = undefined;
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("8", () => {
    //GIVEN
    const nombreDeDepart = 8;
    const resultatAttendu = undefined;
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("9", () => {
    //GIVEN
    const nombreDeDepart = 9;
    const resultatAttendu = "Fizz";
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });

  test("10", () => {
    //GIVEN
    const nombreDeDepart = 10;
    const resultatAttendu = "Buzz";
    //WHEN
    const resultat = fizzBuzz(nombreDeDepart);
    //THEN
    expect(resultat).toBe(resultatAttendu);
  });
});
