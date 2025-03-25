# 62. Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

# 62. Уникальные траектории

На сетке mxn есть робот. Изначально робот находится в верхнем левом углу (т.е. в сетке[0][0]). Робот пытается переместиться в правый нижний угол (т.е. в сетку[m - 1][n - 1]). В любой момент времени робот может перемещаться только вниз или вправо.

Учитывая два целых числа m и n, верните количество возможных уникальных путей, по которым робот может пройти, чтобы достичь нижнего правого угла.

Тестовые задания генерируются таким образом, чтобы ответ был меньше или равен 2 * 109.
```
Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
```