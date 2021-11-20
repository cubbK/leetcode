export class MyLinkedList {
  next: MyLinkedList;
  value: number;
  constructor(value: number) {
    this.value = value;
  }

  get(index: number): number {
    let current: MyLinkedList = this;

    try {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.value;
    } catch (e) {
      return -1;
    }
  }

  addAtHead(val: number): MyLinkedList {
    const newNext = this;
    const newHead = new MyLinkedList(val);
    newHead.next = newNext;
    return newHead;
  }

  addAtTail(val: number): void {
    let currentTail: MyLinkedList = this;
    while (currentTail.next) {
      currentTail = currentTail.next;
    }
    const newTail = new MyLinkedList(val);
    currentTail.next = newTail;
  }

  addAtIndex(index: number, val: number): void {
    const prev = this.findAtIndex(index - 1);
    const next = this.findAtIndex(index);
    const current = new MyLinkedList(val);
    prev.next = current;
    current.next = next;
  }

  deleteAtIndex(index: number): void {}

  private findAtIndex(index: number): MyLinkedList {
    let current: MyLinkedList = this;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current;
  }
}

// const linkedList = new MyLinkedList(1);
// linkedList.addAtTail(2);
// linkedList.addAtTail(3);
// linkedList.get(1);
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
