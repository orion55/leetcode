// Сагрегировать данные для страницы постов
// Список постов: https://jsonplaceholder.typicode.com/posts
// Список пользователей: https://jsonplaceholder.typicode.com/users
// Список комментов: https://jsonplaceholder.typicode.com/comments

```
// Посты
[{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}]

// Комменты
[{
"postId": 1,
"id": 1,
"name": "id labore ex et quam laborum",
"email": "Eliseo@gardner.biz",
"body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}]

// Пользователи
[{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"phone": "1-770-736-8031"
}]

// Выходной формат данных (посты):
[{
"id": 1, // id поста
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", // title поста
"userName": "Leanne Graham",
"commentsCount": 10,
}]

// Заправшиваем сразу все даные
```