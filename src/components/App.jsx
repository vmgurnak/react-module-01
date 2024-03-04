import './App.css';

// --------------------------------Обробка подій----------------------------------

// const App = () => {
//   const handleClick = () => {
//     alert("I'm a button!");
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// };

// export default App;

// обробник подій безпосередньо всередині JSX як анонімну інлайн-функцію.

// const App = () => {
//   return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
// };

// export default App;

// -----------------------------Об'єкт події-----------------------------

// const App = () => {
//   const handleClick = evt => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={evt => console.log(evt)}>Second button</button>
//     </>
//   );
// };

// export default App;

// ------------------------------Читання props---------------------------

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// export default App;

// ---------------------------Реактивність--------------------------;

// import { useState } from 'react';

// const App = () => {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// export default App;

// -----------------------Декілька станів---------------------

// import { useState } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// export default App;

// -----------------------Ізоляція стану----------------------------

// Стан є локальним для екземпляра компонента. Якщо ми відображаємо один і той самий компонент декілька разів, кожна копія матиме абсолютно ізольований стан! Зміна одного з них не вплине на інший.

// import ClickCounter from './ClickCounter';

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// export default App;

// ------------------------Підняття стану---------------------------

// якщо нам потрібно, щоб всі ClickCounter тримали свої стани синхронізованими?
// Правильний спосіб зробити це в React - це видалити стан з дочірніх компонентів і додати його до їхнього найближчого спільного батька, тобто створити спільний стан

// import { useState } from 'react';
// import ClickCounter from './ClickCounter';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// export default App;

// -----------------------Оновлення об'єктів-------------------------

// Стан може містити будь-який тип значення, включаючи об'єкти.

// import { useState } from 'react';

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// export default App;

// ---------------------------------Хук useEffect--------------------------------

// Хук useEffect(callback, deps) оголошує ефект, який приймає два аргументи

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export default App;

// -------------------------------Етап монтування---------------------------------

// Якщо другим аргументом хука useEffect передати порожній масив, то такий ефект виконається лише один раз - на етапі монтування компонента, і більше ніколи.

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export default App;

// ----------------------------------Етап розмонтування--------------------------------

// React.StrictMode в режимі розробки змушує кожний компонент монтуватися двічі (монтування > розмонтування > монтування).

// Давайте створимо компонент, який при монтуванні буде запускати інтервал для виведення повідомлення кожні дві секунди.

// import { useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

// export default App;

// Кожного разу при відкритті модального вікна буде запускатися новий інтервал, і в консолі буде дуже багато повідомлень, а не одне кожні дві секунди. Це і є та сама проблема витоку пам'яті: ми не очищаємо інтервал при розмонтуванні компонента Modal.

// import Modal from './Modal';
// import { useState } from 'react';

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// export default App;

// -----------------------------Етап оновлення------------------------------

// Якщо ефект використовує якийсь стан, пропс або будь-яку змінну, оголошену всередині компонента, обов'язково треба вказати їх як залежності ефекту.

// Наприклад, наступний ефект буде записаний невірно.

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ❌ Ефект записаний з помилкою!
//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export default App;

// Якщо ви написали ефект та лінтер вказує на проблеми зі списком залежностей – ваш ефект гарантовано працює нестабільно і непередбачувано.
// Додайте усі необхідні залежності ефекту

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export default App;

// ------------------------------Декілька ефектів---------------------------------

// У компоненті можна оголошувати стільки ефектів, скільки потрібно. Це дозволяє згрупувати логіку, створивши ефект для кожної незалежної операції.

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// export default App;

// Коли в компоненті є кілька станів, можна використовувати ефекти, щоб реагувати на зміни будь-якої комбінації значень і виконувати певний код. Головне не забувати правильно вказувати залежності кожного ефекту.

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log('First updated: ', first);
//   }, [first]);

//   useEffect(() => {
//     console.log('Second updated: ', second);
//   }, [second]);

//   useEffect(() => {
//     console.log('First or second updated: ', first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// export default App;

// --------------------------- Робота з LocalStorage----------------------------

// У ефекті додаємо код запису в локальне сховище.
// Ключ - це довільний рядок, наприклад, "saved-clicks", а значення - це стан clicks.
// window.localStorage.setItem("saved-clicks", clicks)

// Запис----------;

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// export default App;

// window.localStorage.setItem('key', JSON.stringify({})) - для складних типів даних

// Читання---------------------

import { useState, useEffect } from 'react';

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      return Number(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

export default App;
