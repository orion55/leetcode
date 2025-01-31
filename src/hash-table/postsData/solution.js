const postsData = async () => {
  const promises = ['posts', 'comments', 'users'].map(async (method) => (await fetch(`https://jsonplaceholder.typicode.com/${method}`)).json());

  const [posts, comments, users] = await Promise.all(promises);

  const usersMap = new Map();
  users.forEach((user) => usersMap.set(user.id, user.username));

  const commentsMap = new Map();
  comments.forEach((comment) => {
    const countComment = commentsMap.get(comment.postId);
    if (countComment) {
      commentsMap.set(comment.postId, countComment + 1);
    } else {
      commentsMap.set(comment.postId, 1);
    }
  });

  // Преобразование
  return posts.reduce((acc, post) => {
    acc.push({
      id: post.id,
      title: post.title,
      //userName: users.find((user) => user.id === post.userId)?.username ?? '',
      userName: usersMap.get(post.userId) ?? '',
      //commentsCount: comments.filter((comment) => comment.postId === post.id)?.length ?? 0,
      commentsCount: commentsMap.get(post.id) ?? 0,
    });
    return acc;
  }, []);
};

postsData().then((results) => console.log(results));
