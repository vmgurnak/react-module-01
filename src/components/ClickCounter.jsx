// ----------------------Ізоляція стану-----------------------

// Стан є локальним для екземпляра компонента. Якщо ми відображаємо один і той самий компонент декілька разів, кожна копія матиме абсолютно ізольований стан! Зміна одного з них не вплине на інший.

// import { useState } from 'react';

// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// export default ClickCounter;

// ------------------------Підняття стану---------------------------

// якщо нам потрібно, щоб всі ClickCounter тримали свої стани синхронізованими?
// Правильний спосіб зробити це в React - це видалити стан з дочірніх компонентів і додати його до їхнього найближчого спільного батька, тобто створити спільний стан

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick
const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default ClickCounter;
