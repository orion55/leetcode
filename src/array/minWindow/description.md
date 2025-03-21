# 76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

# 76. Минимальная подстрока окна

Учитывая две строки s и t длиной m и n соответственно, верните минимальную
подстроку окна s таким образом, чтобы каждый символ в t (включая дубликаты) был включен в окно. Если такой подстроки нет, верните пустую строку "".

Тестовые примеры будут сгенерированы таким образом, чтобы ответ был уникальным.

```
Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```