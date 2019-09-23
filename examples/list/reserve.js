/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 递归，时间复杂度 O(n), 空间复杂度 O(n)
function recursive(head) {
    if (!head || head.next === null) return head;
    function reserve(cur, prev) {
        if (cur.next === null) head = cur;
        if (cur.next) reserve(cur.next, cur);
        cur.next = prev;
    }
    reserve(head, null);
    return head
}

// 循环，时间复杂度 O(2n)=>O(n)，空间复杂度 O(n)
function cycle(head) {
    if (!head || head.next === null) return head;

    const stack = [];
    let p = head;
    while (p.next !== null) {
        stack.push(p);
        p = p.next;
    }
    stack.push(p);

    head = stack.pop();
    let q = head;
    while (stack[0]) {
        q = q.next = stack.pop();
    }
    q.next = null;

    return head;
}

// 迭代+三指针法，时间复杂度 O(n)，空间复杂度 O(1)
function triplePoint(head) {
    //  head 为空，或者一个元素情况下；    
    if (!head || head.next === null) return head;

    //  三枚指针
    const p = [head, head.next, head.next.next];

    //  只有两个元素情况下
    if (p[2] === null) {
        p[1].next = p[0];
        p[0].next = null;
        head = p[1];
        return head;
    }

    // 处理头节点
    p[1].next = p[0];
    p[0].next = null;

    // 处理中间节点, last point index
    let count = p.length + 2;
    let lpi = count % p.length;
    let mpi = (count - 1) % p.length;
    let fpi = (count - 2) % p.length;

    while (p[lpi] !== null) {

        // 改变第一个节点 next 指向
        p[fpi] = p[lpi].next;

        // 第一个节点移到最后节点的下一个节点
        p[lpi].next = p[mpi];

        // 重新计算最后节点 index
        count++;
        lpi = count % p.length;
        mpi = (count - 1) % p.length;
        fpi = (count - 2) % p.length;
    }

    // 处理尾节点
    head = p[mpi];
    return head;
}

// 迭代+双指针+临时指针法，时间复杂度 O(n)，空间复杂度 O(1)
function doublePoint(head) {
    //  head 为空，或者一个元素情况下；    
    if (!head || head.next === null) return head;

    let prev = null;
    let cur = head;

    while(cur.next !== null) {
        const temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    cur.next = prev;
    head = cur;
    return head;
}


// var reverseList = recursive;
// var reverseList = cycle;
// var reverseList = triplePoint;
var reverseList = doublePoint;