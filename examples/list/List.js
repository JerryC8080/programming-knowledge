/**
 * 链表
 */

class List {
    constructor() {
        this.head = null;
        this.size = 0;
        return this.head;
    }

    // 插入节点，时间复杂度 O(n)
    insert(val, position) {

        // 未指定position，默认插入尾部
        if (position === undefined) position = this.size;

        // 判断position的合法性
        if (position > this.size) throw new Error(`max position is ${this.size}`);

        // 未初始化，插入，然后返回
        if (this.head === null) {
            this.head = { val, next: null };
            this.size++;
            return this.head;
        }

        // 插入头部
        if (position === 0) {
            const node = { val, next: this.head };
            this.head = node;
            this.size++;
            return this.head;
        }

        // 插入中间以及尾部
        let p = this.head;
        let curIndex = 0;

        // 移动p指针，直到尾部，或者找到插入位置的前一个节点为止
        while (p.next !== null && curIndex !== position - 1) {
            p = p.next;
            curIndex++;
        }
        const node = { val, next: p.next };
        p.next = node;
        this.size++;
        return this.head;
    }

    // 删除节点，时间复杂度 O(n)
    delete(position) {
        if (this.size <= 0) throw new Error('nothing to delete');

        // 合法性校验
        if (position < 0 || position >= this.size) throw new Error(`position should in [0, ${this.size - 1}]`);

        if (position === 0) {
            // 移除头部节点
            this.head = this.head.next;
        } else {
            // 移除中间或尾部节点
            let p = this.head;
            let curIndex = 0;
            while (curIndex !== position - 1) {
                p = p.next;
                curIndex++;
            }
            p.next = p.next.next;
        }

        this.size--;
        return this.head;
    }

    // 漂亮的打印出当前链表，时间复杂度 O(n)
    print() {
        let output = 'head -> ';

        if (this.head) {
            let p = this.head;
            while (p.next !== null) {
                output += `${p.val} -> `
                p = p.next;
            }
            output += `${p.val}`;
        }

        console.log(`${output} (size: ${this.size})`);
    }
}

const list = new List();

for (let index = 0; index < 5; index++) {
    list.insert(index);
}

list.print();
list.insert(6, 2);
list.print();
list.insert(-1, 0);
list.print();
list.insert(7, 6);
list.print();

list.delete(0);
list.print();
list.delete(4);
list.print();
list.delete(4);
list.print();

