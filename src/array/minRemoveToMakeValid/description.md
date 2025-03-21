# 1249. Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

# 1249. Минимум уберите, чтобы сделать правильные круглые скобки

Задана строка, состоящая из '(' , ')' и строчных английских символов.

Ваша задача - удалить минимальное количество круглых скобок ( '(' или ')' в любых позициях ), чтобы результирующая строка в круглых скобках была допустимой и возвращала любую допустимую строку.

Формально строка в круглых скобках допустима тогда и только тогда, когда:

Это пустая строка, содержащая только строчные символы, или
Она может быть записана как AB (A, объединенный с B), где A и B - допустимые строки, или
Она может быть записана как (A), где A - допустимая строка.

```
Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
```