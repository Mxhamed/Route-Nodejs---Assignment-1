/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
  let current = init;

  const increment = () => {
    current++;
    return current;
  };

  const decrement = () => {
    current--;
    return current;
  };

  const reset = () => {
    current = init;
    return current;
  };

  return {
    increment,
    decrement,
    reset,
  };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
