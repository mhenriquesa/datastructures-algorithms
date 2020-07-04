// -----------------------------------------------------
//* Doubly linked lists - by M. Henrique SA
//------------------------------------------------------

class SingleNode {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new SingleNode(value);
    (this.tail.next = newNode), (newNode.prev = this.tail);
    (this.tail = newNode), this.length++;
  }

  prepend(value) {
    const newNode = new SingleNode(value);
    (newNode.next = this.head),
      (this.head.prev = newNode),
      (this.head = newNode),
      this.length++;
    return this;
  }

  showMyList() {
    let print = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      print.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(print);
  }

  findMeByIndex(index) {
    let element = this.head;
    let counter = 0;
    while (counter < index) {
      element = element.next;
      counter++;
    }
    return element;
  }
  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index < 1) return this.prepend(value);

    let newNode = new SingleNode(value);
    let prevElement = this.findMeByIndex(index - 1);
    let currentElement = prevElement.next;

    newNode.next = currentElement;
    newNode.prev = prevElement;
    currentElement.prev = newNode;
    prevElement.next = newNode;

    this.length++;
  }
  shift() {
    let secondNode = this.head.next;

    secondNode.prev = null;
    this.head = secondNode;

    this.length--;
    return;
  }
  pop() {
    let beforeLastNode = this.tail.prev;

    beforeLastNode.next = null;
    this.tail = beforeLastNode;

    this.length--;
    return;
  }
  remove(index) {
    if (index < 1) return this.shift();
    if (index >= this.length - 1) return this.pop();

    let prevElement = this.findMeByIndex(index - 1);

    prevElement.next = prevElement.next.next;
    prevElement.next.next.prev = prevElement;

    this.length--;
  }
}

const myList = new LinkedList(1);

myList.append(3);

myList.insert(1, 2);

myList.remove(0);
myList.remove(0);
myList.append(99);

console.log(myList);
