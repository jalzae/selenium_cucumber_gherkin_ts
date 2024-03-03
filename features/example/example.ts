import assert from "assert";

import { Given, When, Then } from "@cucumber/cucumber";

let calc = {
  a: 10,
  b: 70
}

const sum = (a: number, b: number) => { return a + b }

Given("I have entered 50 into the calculator", function (this: number) {
  calc.a = 50
  assert.equal(calc.a, 50);
});
When("I have entered 70 into the calculator", function (this: number) {
  calc.b = 70
  assert.equal(calc.b, 70);
});
Then("I press add", function (this: number) {
  const result = sum(calc.a, calc.b)
  assert.equal(result, 120);
});

