const functions = require("./functions");
test("returnTwo() should return 2.", () => {
  expect(functions.returnTwo()).toEqual(2);
});

test("returnTwo() should return 2.", () => {
  expect(functions.returnTwo()).toBe(2);
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect(functions.greeting("James")).toBe("Hello, James.");
  expect(functions.greeting("Jill")).toBe("Hello, Jill.");
});

// test("add() should return a dynamic sum based on two number parameters.", () => {
//     expect( functions.add( 1, 2 ) ).toBe( 3 );
//     expect( functions.add( 5, 9 ) ).toBe( 14 );
//   });

describe("Math functions:", () => {
  test("add() should return a dynamic sum based on two number parameters.", () => {
    expect(functions.add(11, 2)).toEqual(13);
    expect(functions.add(5, 5)).toEqual(10);
  });

  test("multiply() should return a dynamic product based on two number parameters.", () => {
    expect(functions.multiply(1, 7)).toEqual(7);
    expect(functions.multiply(5, 9)).toEqual(45);
  });

  test("divide() should return a dynamic quotient based on two number parameters.", () => {
    expect(functions.divide(2, 2)).toEqual(1);
    expect(functions.divide(9, 9)).toEqual(1);
  });

  test("subtract() should return a dynamic difference based on two number parameters.", () => {
    expect(functions.subtract(2, 1)).toEqual(1);
    expect(functions.subtract(9, 3)).toEqual(6);
  });
});
