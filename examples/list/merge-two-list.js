/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 循环，时间复杂度 O(n+m)，空间复杂度 O(1)
function cycle(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let head = null;
    let curP = head;
    let curPl1 = l1;
    let curPl2 = l2;
    
    function doMin(min) {
        if (head === null) curP = head = { val: min.val, next: null };
        else {
            curP.next = { val: min.val, next: null };
            curP = curP.next;
        }
        if (min === curPl1) curPl1 = curPl1.next;
        if (min === curPl2) curPl2 = curPl2.next;
    }
    
    while(!(curPl1 === null && curPl2 === null)) {
        let min;
        if (curPl1 === null) min = curPl2;
        else if (curPl2 === null) min = curPl1;
        else if (curPl1.val <= curPl2.val) min = curPl1;
        else min = curPl2;
        doMin(min);
    }
    
    return head;
};

var mergeTwoLists = cycle;