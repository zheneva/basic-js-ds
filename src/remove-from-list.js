const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let arr = [];
  let current = l;

  if (current.value == k) {
    l = current.next;
    current = current.next;
  }

  while (current.next != null) {


    if (current.next.value == k)  {
      let tmp = current.next;
      while (tmp.value == k) {
        if (tmp.next != null) tmp = tmp.next;
        else tmp = null;
      }
      current.next = tmp;
    }


    // if (current.next.next == null & current.next.value == k) {
    //   //console.log('current.next.value', current.next.value)
    //   current.next = null;
    //   break;
    // }
    current = current.next;
  }


  // if (current.value == k) {
  //   l = current.next;
  //   current = current.next;
  // }


  return l;
}

module.exports = {
  removeKFromList
};
