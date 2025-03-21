# 904. Fruit Into Baskets
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

# 904. Фрукты в корзинах
Вы посещаете ферму, на которой фруктовые деревья расположены в один ряд слева направо. Деревья представлены целочисленным массивом fruits, где fruits[i] - это тип фруктов, которые дает i-е дерево.

Вы хотите собрать как можно больше фруктов. Однако у владельца есть несколько строгих правил, которым вы должны следовать:

У вас есть только две корзины, и в каждой корзине могут быть фрукты только одного вида. Количество фруктов, которое может поместиться в каждой корзине, не ограничено.
Начиная с любого дерева по вашему выбору, вы должны сорвать ровно по одному фрукту с каждого дерева (включая начальное дерево), двигаясь вправо. Собранные фрукты должны поместиться в одну из ваших корзин.
Как только вы дойдете до дерева с фруктами, которые не помещаются в ваши корзины, вы должны остановиться.
Учитывая целочисленный массив fruits, верните максимальное количество фруктов, которые вы можете выбрать.

```
Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
```