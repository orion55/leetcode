#  One Edit Distance
Задача One Edit Distance заключается в проверке того, могут ли две строки быть преобразованы друг в друга с помощью одного изменения. Это изменение может быть:

    Вставка одного символа в одну из строк.
    Удаление одного символа из одной из строк.
    Замена одного символа в одной из строк.

Необходимо проверить, могут ли две строки быть преобразованы в друг друга с помощью одного из этих изменений.
Условия:

    Строки могут иметь разную длину.
    Допускается только одно изменение (или отсутствие изменений).

```
Примеры:

    Пример 1:
        Вход: s = "abc", t = "ab"
        Выход: true
        Объяснение: Нужно удалить последний символ в строке s, чтобы получить строку t.

    Пример 2:
        Вход: s = "abc", t = "xbc"
        Выход: true
        Объяснение: Нужно заменить первый символ строки s на символ x, чтобы получить строку t.

    Пример 3:
        Вход: s = "abc", t = "ac"
        Выход: true
        Объяснение: Нужно удалить символ b из строки s, чтобы получить строку t.

    Пример 4:
        Вход: s = "abc", t = "abac"
        Выход: false
        Объяснение: Строки отличаются по длине более чем на 1 символ, поэтому требуется больше чем одно изменение.

    Пример 5:
        Вход: s = "abc", t = "abc"
        Выход: false
        Объяснение: Строки одинаковые, поэтому нет изменений.
```