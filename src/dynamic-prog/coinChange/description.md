# 322. Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

# 322. Размен монет
Вам выдается целочисленный массив coins, представляющий монеты разного достоинства, и целочисленная сумма, представляющая общую сумму денег.

Верните наименьшее количество монет, необходимое для пополнения этой суммы. Если эта сумма не может быть восполнена какой-либо комбинацией монет, верните значение -1.

Вы можете предположить, что у вас есть бесконечное количество монет каждого вида.

```
Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0
```