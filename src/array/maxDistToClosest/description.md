# 849. Maximize Distance to Closest Person

You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
There is at least one empty seat, and at least one person sitting.
Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
Return that maximum distance to the closest person.

# 849. Увеличьте дистанцию до самого близкого человека

Вам предоставлен массив, представляющий ряд сидений, где seats[i] = 1 означает человека, сидящего на i-м месте, а seats[i] = 0 означает, что i-е место пусто (индексировано по 0).
Есть, по крайней мере, одно свободное место, и, по крайней мере, один человек сидит.
Алекс хочет сесть на такое место, чтобы расстояние между ним и ближайшим к нему человеком было максимальным.
Верните это максимальное расстояние ближайшему человеку.

```
Example 1:
Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation:
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.

Example 2:
Input: seats = [1,0,0,0]
Output: 3
Explanation:
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.

Example 3:
Input: seats = [0,1]
Output: 1
```