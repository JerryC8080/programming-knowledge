# 排序算法

## 冒泡排序

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/4038f64f47975ab9f519e4f739e464e9.jpg)

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/9246f12cca22e5d872cbfce302ef4d09.jpg)

1. 原地排序
2. 稳定算法
3. 时间复杂度
    1. 最好：O(n)
    2. 最坏：O(n^2)
    3. 平均：O(n^2) <= O(n*(n-1)/4) （通过有序度估算）

## 插入排序

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/fd6582d5e5927173ee35d7cc74d9c401.jpg)

1. 原地排序
2. 稳定算法
3. 时间复杂度
    1. 最好：O(n)
    2. 最坏：O(n^2)
    3. 平均：O(n^2) <= O(n*(n-1)/4) （通过有序度估算）


## 选择排序

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/32371475a0b08f0db9861d102474181d.jpg)

1. 原地排序
2. 稳定算法
3. 时间复杂度
    1. 最好：O(n^2)
    2. 最坏：O(n^2)
    3. 平均：O(n^2)


## 总结

![](https://raw.githubusercontent.com/JerryC8080/figure-bed/master/img/348604caaf0a1b1d7fee0512822f0e50.jpg)

1. 评价排序算法的三个维度：
    1. 是否原地排序？
    2. 是否稳定？
    3. 最好、最坏、平均时间复杂度？
1. 冒泡和选择排序，由于算法复杂度太高，仅停留在理论层面，用来开拓思维，实际开发应用不多。
2. 冒泡排序的交换操作，需要3次，插入排序需要1一次，所以插入细节上比冒泡更优。


### 课后作业
1. 代码实现冒泡排序、插入排序、选择排序
2. 计算最好、最坏、平均时间复杂度