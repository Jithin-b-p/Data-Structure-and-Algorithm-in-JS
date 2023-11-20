class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // pushing item to the stack and returning the index position in stack.
  push(item) {
    this.items[this.count] = item;
    this.count++;
    return this.count - 1;
  }

  // removing last element from the stack and returning the removed element.
  pop() {
    // when the stack is empty.
    if (this.count === 0) return undefined;

    return this.items[--this.count];
  }

  // peeking the stack will return the last element.
  peek() {
    // when the stack is empty.
    if (this.count === 0) return undefined;

    return this.items[this.count - 1];
  }

  // Return a boolean which denotes whether the stack is empty or not.
  isEmpty() {
    return this.count === 0;
  }

  // getting the current size of the stack.
  size() {
    return this.count;
  }

  // getting present elements inside the stack.
  printStack() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }

    return str === ""? "No element in stack": str;
  }

  // clear the stack.
  clear() {
    this.items = [];
    this.count = 0;
    return this.items;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(23);
stack.push(543);
stack.push(21);
stack.push(11);
stack.push(34);
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.printStack());

console.log(stack.peek());
console.log(stack.size());
console.log(stack.push(28));
console.log(stack.printStack());
console.log(stack.clear());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.printStack());
