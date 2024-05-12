var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.stack.length) {
    this.stack.push({ val, min: val });
  } else {
    this.stack.push({ val, min: Math.min(this.stack.at(-1).min, val) });
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1).val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack.at(-1).min;
};
