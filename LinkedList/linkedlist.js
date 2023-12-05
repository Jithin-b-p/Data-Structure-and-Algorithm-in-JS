function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    if (head == null) return undefined;
    let currentNode = head;
    let previousNode = null;
    if (currentNode.element === element) {
      head = currentNode.next;
      length--;
    } else {
      while (currentNode && currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      if (currentNode) {
        previousNode.next = currentNode.next;
        length--;
      }
    }
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        return currentNode.element;
      }
      count++;
      currentNode = currentNode.next;
    }
    return undefined;
  };
}

const list = new LinkedList();
const list1 = new LinkedList();

list.add(2);
list.add(1);
list.add(5);
list.add(7);
list1.add(2);
list1.add(2);
list1.add(2);
list1.add(2);
list1.add(2);
console.log(list1.size());
console.log(list.size());
list.remove(4);
console.log(list.size());
console.log(list.indexOf(7));
console.log(list.indexOf(6));
console.log(list.elementAt(2));
