// amortized deque and peek

var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.moveElementsIfNeeded();
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.moveElementsIfNeeded();
  return this.outStack.at(-1);
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.inStack.length && !this.outStack.length;
};

MyQueue.prototype.moveElementsIfNeeded = function () {
  if (!this.outStack.length) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }
};
