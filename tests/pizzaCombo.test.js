const calcuateTotal = require("../exercises/pizzaCombo");

test("calculates price for 1 coke + 2 pizzaSlice + 1 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 1 },
      { item: "pizzaSlice", qty: 2 },
      { item: "dessert", qty: 1 },
    ])
  ).toBe(2 + 5 + 5 + 3);
});

test("calculates price for 1 coke + 3 pizzaSlice + 1 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 1 },
      { item: "pizzaSlice", qty: 3 },
      { item: "dessert", qty: 1 },
    ])
  ).toBe(5 + 5 + 5 + 3);
});

test("calculates price for 1 coke + 1 pizzaSlice + 0 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 1 },
      { item: "pizzaSlice", qty: 1 },
      { item: "dessert", qty: 0 },
    ])
  ).toBe(2 + 5);
});

test("calculates price for 1 coke + 0 pizzaSlice + 3 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 1 },
      { item: "pizzaSlice", qty: 0 },
      { item: "dessert", qty: 3 },
    ])
  ).toBe(2 + 3 + 3 + 3);
});

test("calculates price for 0 coke + 3 pizzaSlice + 0 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 1 },
      { item: "pizzaSlice", qty: 0 },
      { item: "dessert", qty: 3 },
    ])
  ).toBe(5 + 5 + 5);
});

test("calculates price for 1 coke + 6 pizzaSlice + 1 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 1 },
      { item: "pizzaSlice", qty: 6 },
      { item: "dessert", qty: 1 },
    ])
  ).toBe((5 * 6) + 3);
});

test("calculates price for 2 coke + 7 pizzaSlice + 1 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 2 },
      { item: "pizzaSlice", qty: 6 },
      { item: "dessert", qty: 1 },
    ])
  ).toBe((5 * 6) + 3);
});

test("calculates price for 3 coke + 7 pizzaSlice + 1 dessert", () => {
  expect(
    calcuateTotal([
      { item: "coke", qty: 3 },
      { item: "pizzaSlice", qty: 6 },
      { item: "dessert", qty: 1 },
    ])
  ).toBe(2 + (5 * 7) + 3);
});
