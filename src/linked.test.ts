import { MyLinkedList } from "./linked";
describe("linked", () => {
  it("retrieves the value coretly by index", () => {
    const linkedList = new MyLinkedList(1);
    linkedList.addAtTail(2);
    linkedList.addAtTail(3);
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(3);
  });
  it("adds to tail", () => {
    const linkedList = new MyLinkedList(1);
    linkedList.addAtTail(2);
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
    linkedList.next.addAtTail(3);
    expect(linkedList.get(2)).toBe(3);
    expect(linkedList.get(99)).toBe(-1);
  });

  it("adds to head", () => {
    let linkedList = new MyLinkedList(1);
    linkedList = linkedList.addAtHead(2);
    linkedList = linkedList.addAtHead(3);
    expect(linkedList.get(0)).toBe(3);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(1);
  });
  it("adds at index", () => {
    let linkedList = new MyLinkedList(1);
    linkedList.addAtTail(2);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 20);
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(20);
    expect(linkedList.get(2)).toBe(2);
    expect(linkedList.get(2)).toBe(3);
  });
});
