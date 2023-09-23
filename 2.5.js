const numbers = [1, 2, 3, 4, 5];
const squareIterator = {
  numbers,
  currentIndex: 0,

  [Symbol.iterator]: function () {
    return this;
  },

  next: function () {
    if (this.currentIndex < this.numbers.length) {
      const square = this.numbers[this.currentIndex] ** 2;
      this.currentIndex++;
      return { value: square, done: false };
    } else {
      return { done: true };
    }
  },
};
for (const square of squareIterator) {
  console.log(square);
}
