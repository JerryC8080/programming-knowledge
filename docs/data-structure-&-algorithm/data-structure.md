## 数组

### 数组特点
1. 随机访问 O(1)，因为是一个简单的哈希表
2. 插入删除操作 O(n)
3. 内存是连续的
    1. 在 C/C++，Java 是如此
    2. 在 JS 中，数组是假的，是一个数组容器（内部应该是链表实现）
4. 动态扩容原理：新开辟更大的内存空间，把旧的复制过去。

![](https://static001.geekbang.org/resource/image/98/c4/98df8e702b14096e7ee4a5141260cdc4.jpg)

## 链表

### 常见链表
1. 单链表
    ![](https://static001.geekbang.org/resource/image/b9/eb/b93e7ade9bb927baad1348d9a806ddeb.jpg)
2. 双向链表
    ![](https://static001.geekbang.org/resource/image/cb/0b/cbc8ab20276e2f9312030c313a9ef70b.jpg)
3. 循环链表
    ![](https://static001.geekbang.org/resource/image/86/55/86cb7dc331ea958b0a108b911f38d155.jpg)

### 链表特点
1. 双向链表中，插入和删除性能高：O(1)
2. 随机访问节点，性能低：O(n)

### 基本链表操作
1. 链表的插入
2. 链表的删除

![](https://static001.geekbang.org/resource/image/45/17/452e943788bdeea462d364389bd08a17.jpg)

### 常见链表操作
1. 单链表翻转（LC 206）
2. 链表中环的检测（LC 141）
3. 两个有序链表的合并（LC 21）
4. 删除链表倒数第 n 个节点（LC 19）
5. 求链表的中间节点（LC 876）

### 常用技巧
1. 哨兵技巧，处理边界
2. 注意头结点，和尾节点