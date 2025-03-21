# 228. Summary Ranges

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:
```
    "a->b" if a != b
    "a" if a == b
```

# 228. Сводные диапазоны

Вам предоставлен отсортированный уникальный целочисленный массив nums.

Диапазон [a,b] - это набор всех целых чисел от a до b (включительно).

Возвращает наименьший отсортированный список диапазонов, который точно охватывает все числа в массиве. То есть, каждый элемент nums попадает точно в один из диапазонов, и нет такого целого числа x, чтобы x находилось в одном из диапазонов, но не в nums.

Каждый диапазон [a,b] в списке должен быть выведен в виде:
```
    "a->b", если a != b
    "a", если a == b
```

```
Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```