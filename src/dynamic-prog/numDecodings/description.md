# 91. Decode Ways
You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

"1" -> 'A'

"2" -> 'B'

...

"25" -> 'Y'

"26" -> 'Z'

However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

For example, "11106" can be decoded into:

"AAJF" with the grouping (1, 1, 10, 6)
"KJF" with the grouping (11, 10, 6)
The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
Note: there may be strings that are impossible to decode.

Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

The test cases are generated so that the answer fits in a 32-bit integer.

# 91. Способы расшифровки
Вы перехватили секретное сообщение, закодированное в виде последовательности цифр. Сообщение расшифровывается следующим образом:

"1" -> "A"

"2" -> "B"

...

"25" -> "Y"

"26" -> "Z"

Однако, расшифровывая сообщение, вы понимаете, что существует множество различных способов расшифровки сообщения, поскольку некоторые коды содержатся в других кодах ("2" и "5" против "25").

Например, "11106" может быть расшифровано как:

"AAJF" с группировкой (1, 1, 10, 6)
"KJF" с группировкой (11, 10, 6)
Группировка (1, 11, 06) недопустима, поскольку "06" не является допустимым кодом (допустимо только "6").
Примечание: могут быть строки, которые невозможно расшифровать.

Если задана строка s, содержащая только цифры, верните количество способов ее декодирования. Если вся строка не может быть декодирована каким-либо допустимым способом, верните 0.

Тестовые примеры генерируются таким образом, чтобы ответ вписывался в 32-разрядное целое число.

```
Example 1:
Input: s = "12"
Output: 2

Explanation:
"12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: s = "226"
Output: 3

Explanation:
"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
Input: s = "06"
Output: 0

Explanation:
"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.
```