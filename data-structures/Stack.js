//*  ---- Stack using Linked List -----

class singleNode {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.lenght = 0;
  }

  push(value) {
    let newNode = new singleNode(value);

    if (this.lenght === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let prevTop = this.top;
      this.top = newNode;
      this.top.next = prevTop;
    }
    this.lenght++;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.lenght--;
  }
  peek() {
    console.log(this.top.value);
  }

  showMyStack() {
    let currentNode = this.top;
    while (currentNode != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(50);
myStack.push(5);
myStack.push(20);
myStack.pop();

console.log(myStack);
myStack.showMyStack();
