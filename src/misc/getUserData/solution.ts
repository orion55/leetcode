type Member = {
  id: number;
  name: string;
};

const memberList: Member[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Tom' },
];

const getMemberById = (id: number): Member | undefined => {
  return memberList.find((person) => person.id === id);
};

const getUserData = async (ids: number[]): Promise<Member[]> => {
  if (ids.length === 0) {
    throw new Error('Ids cannot be empty');
  }

  const promises = ids.map((id) => {
    return new Promise<Member>((resolve, reject) => {
      setTimeout(() => {
        const member = getMemberById(id);
        if (member) {
          resolve(member);
        } else {
          reject(new Error(`Member with ID ${id} not found`));
        }
      }, 100 * id); // Задержка, пропорциональная ID
    });
  });

  try {
    return await Promise.all(promises);
  } catch (error) {
    console.error(error); // Логируем ошибку, если что-то пошло не так
    return [];
  }
};

const ids = [1, 2, 3];

getUserData(ids)
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.error(error);
  });
