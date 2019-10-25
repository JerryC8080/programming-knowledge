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
    1. 迭代：双指针+临时指针，原地改变。Time:O(n),Space:O(1)
    2. 迭代：辅助栈，两次遍历。Time:O(n),Space:O(n)
    2. 递归：Time:O(n),Space:O(n)
2. 链表中环的检测（LC 141）
3. 两个有序链表的合并（LC 21）
4. 删除链表倒数第 n 个节点（LC 19）
5. 求链表的中间节点（LC 876）
6. 从尾到头输出链表

### 常用技巧
1. 哨兵技巧，处理边界
2. 注意头结点，和尾节点

## 栈

### 特点
1. 先入后出
2. 只有两种操作：push入栈、pop出栈

### 两种实现方式
1. 顺序栈：用数组来实现
2. 链式栈：用链表来实现

### 应用场景
1. 函数调用栈：一个栈，存储函数上下文变量
    ![](https://static001.geekbang.org/resource/image/17/1c/17b6c6711e8d60b61d65fb0df5559a1c.jpg)
2. 表达式求值：（比如：34+13*9+44-12/3）、（`{}{[()]()}`）
    ![](https://static001.geekbang.org/resource/image/bc/00/bc77c8d33375750f1700eb7778551600.jpg)
3. 浏览器的前进后退功能：两个栈，一个当前栈，一个存储后退之后的栈

### 课后作业
1. 实现顺序栈，入栈和出栈操作
2. 实现链式栈，入栈和出栈操作

## 队列

### 特点
1. 先入先出
2. 只有两种操作：enqueue入队，dequeue出队

### 两种实现方式
1. 顺序队列：数组
2. 链式队列：链表

### 特殊队列
1. 循环队列
    ![](https://static001.geekbang.org/resource/image/3d/ec/3d81a44f8c42b3ceee55605f9aeedcec.jpg)
2. 阻塞队列：消费者-生产者模式
    ![](https://static001.geekbang.org/resource/image/5e/eb/5ef3326181907dea0964f612890185eb.jpg)
    ![](https://static001.geekbang.org/resource/image/9f/67/9f539cc0f1edc20e7fa6559193898067.jpg)

### 应用场景
1. 线程池，线程安全，并发队列
2. 数据库连接池
3. 消息队列，kafka

### 课后作业
1. 实现队列，两种方式
2. 循环队列的实现，注意判空和判满

## 跳表

简介：为有序单链表，以 n 个为间隔，建立多层索引链表，来提高查找的效率。是用空间换取时间的做法。

特性
1. 时间复杂度：O(logn)
2. 空间复杂度：O(n)

操作
1. 查找
2. 插入
3. 删除

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191023213004.jpg)

以上是建立了三层索引链表。

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191023213003.jpg)

查找的过程中，大幅度减少遍历次数。

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191023213005.jpg)

删除的时候，要注意更新索引链表，可以定制具体的策略来达到优化。

## 课后作业
1. 时间复杂度的计算
2. 空间复杂度的计算
