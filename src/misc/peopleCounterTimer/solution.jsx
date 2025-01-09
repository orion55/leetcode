import React, { useState, useEffect } from 'react';

// Компонент списка людей
const PeopleList = () => {
  const people = [
    { name: 'Олег', age: 30, position: 'Frontend Developer' },
    { name: 'Анна', age: 25, position: 'UI/UX Designer' },
    { name: 'Сергей', age: 35, position: 'Backend Developer' },
    { name: 'Мария', age: 28, position: 'Product Manager' },
  ];

  return (
    <div>
      <h3>Список людей:</h3>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} лет, {person.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Компонент для счётчика
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Счётчик (увеличивается каждые 2 секунды):</h3>
      <p>{count}</p>
    </div>
  );
};

// Компонент для таймера
const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Таймер (увеличивается каждую секунду):</h3>
      <p>{time} сек.</p>
    </div>
  );
};

// Основной компонент приложения
const App = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial',
        textAlign: 'left',
        marginTop: '20px',
        backgroundColor: 'white', // Белый фон
        minHeight: '100vh', // Высота на весь экран
        padding: '20px', // Отступы
      }}
    >
      <PeopleList />
      <Counter />
      <Timer />
    </div>
  );
};

export default App;
