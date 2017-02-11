describe("About Higher Order Functions", function() {

  it("should use filter to return array items that meet a criteria", function() {
    const numbers = [1, 2, 3];
    const odd = numbers.filter((number) => (number % 2) !== 0)

    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function() {
    const numbers = [1, 2, 3];
    const numbersPlus1 = numbers.map((number) => number + 1)

    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function() {
    const numbers = [1, 2, 3];
    const reduction = numbers.reduce((memo, x) => memo + x, 0)

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'forEach' for simple iteration", function() {
    const numbers = [1, 2, 3];
    let msg = "";
    const isEven = function(item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'all' to test whether all items pass condition", function() {
    const onlyEven = [2, 4, 6];
    const mixedBag = [2, 4, 5, 6];

    const isEven = function(x) {
      return x % 2 === 0
    };

    expect(onlyEven.every(isEven)).toBe(true);
    expect(mixedBag.every(isEven)).toBe(false);
  });

  it("should use 'any' to test if any items passes condition", function() {
    var onlyEven = [2, 4, 6];
    var mixedBag = [2, 4, 5, 6];

    var isEven = function(x) {
      return x % 2 === 0
    };

    expect(onlyEven.some(isEven)).toBe(true);
    expect(mixedBag.some(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() {
    expect(Array.from(Array(3), (x = 0, i) => x + i)).toEqual([0, 1, 2]);
    expect(Array.from(Array(3), (x = 1, i) => x + i)).toEqual([1, 2, 3]);
    expect(Array.from(Array(3), (x = 0, i) => x - i)).toEqual([0, -1, -2]);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
    expect([].concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
    const result = [].concat([0, 1], [2])
      .map(function(x) {
        return x + 1
      })
      .reduce(function(sum, x) {
        return sum + x
      })

    expect(result).toEqual(6);
  });
});
