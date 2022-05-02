const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getUnderlyingList() {
    // let current = this.head;
    // while(current){
    //   console.log(current.value);
    //   current = current.next;
    // }
    return this.head;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      let current = this.tail;
      while (current.next) {
        current = curent.next;
      }
      current.next = new ListNode(value);
      this.tail = current.next;
    }

    this.length++;
  }

  dequeue() {
    if (this.head == null) {
      return
    } else {
      let current = this.head;
      this.head = current.next;
      return current.value;
    }

    this.length--;
  }
}

module.exports = {
  Queue
};
