# 排序算法

## 前言

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191012082816.jpg)
![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191012084032.jpg)

基本的特性分析：
1. 是否原地排序
2. 是否稳定
3. 时间复杂度：最好、最坏、平均
4. 空间复杂度

## O(n^2)：冒泡、插入、选择

### 冒泡排序

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/4038f64f47975ab9f519e4f739e464e9.jpg)

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/9246f12cca22e5d872cbfce302ef4d09.jpg)

1. 原地排序
2. 稳定算法
3. 时间复杂度
    1. 最好：O(n)
    2. 最坏：O(n^2)
    3. 平均：O(n^2) <= O(n*(n-1)/4) （通过有序度估算）

### 插入排序

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/fd6582d5e5927173ee35d7cc74d9c401.jpg)

1. 原地排序
2. 稳定算法
3. 时间复杂度
    1. 最好：O(n)
    2. 最坏：O(n^2)
    3. 平均：O(n^2) <= O(n*(n-1)/4) （通过有序度估算）


### 选择排序

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/32371475a0b08f0db9861d102474181d.jpg)

1. 原地排序
2. 稳定算法
3. 时间复杂度
    1. 最好：O(n^2)
    2. 最坏：O(n^2)
    3. 平均：O(n^2)


### 总结

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/348604caaf0a1b1d7fee0512822f0e50.jpg)

1. 冒泡和选择排序，由于算法复杂度太高，仅停留在理论层面，用来开拓思维，实际开发应用不多。
2. 冒泡排序的交换操作，需要3次，插入排序需要1一次，所以插入细节上比冒泡更优。


## O(nlogn)：归并、快速

### 归并排序

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191012082946.jpg)

三项基本特性分析：
1. 原地：否
2. 稳定：是
3. 时间复杂度：最好、最坏、平均都是 O(nlogn)


### 快速排序

![寻找分区点](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191012083521.jpg)

![原地分区操作](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191012083522.jpg)

三项基本特性分析：
1. 原地：是
2. 稳定：否（因为涉及交换操作）
3. 时间复杂度：
    1. 最好：O(nlogn)
    2. 最坏：O(n^2)
    3. 平均：O(nlogn)

分区点的选择策略，会影响快速排序算法的性能，常见寻找分区点策略：
1. 三数取中
2. 随机法

## O(n)：桶、计数、基数

### 桶排序

**核心思想**
将要排序的数据分到几个有序的桶里面，每个桶的数据再单独进行排序（快排算法）。    
桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的。

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/20191012085036.jpg)

**特性分析**
1. 原地：否
2. 稳定：否（因为内部使用了快排算法）
3. 时间复杂度：O(n*log(n/m)), n = 数据个数, m = 桶个数
    1. 最好：接近O(n)，在桶的个数接近数据个数时
    2. 最坏：O(nlogn)
4. 空间复杂度

### 计数排序

### 基数排序

## 课后作业
1. 代码实现冒泡排序、插入排序、选择排序
2. 计算最好、最坏、平均时间复杂度
3. 哪些因素影响到了算法是否稳定的？