// import LoginForm from './components/LoginForm';

// const App = () => {
//   return <LoginForm />;
// };

// export default App;

// ------------Використання форми-----------

// import LoginForm from './components/LoginForm';

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };

// export default App;

// ----------------------------Хук useId-----------------------------

// для цього і існує хук useId, який повертає унікальний рядок ідентифікатора, пов'язаний з конкретним викликом useId у даному компоненті.

// import LoginForm from './components/LoginForm';

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//       <LoginForm />
//     </div>
//   );
// };

// export default App;

// ----------Контрольовані елементи-----------

// Якщо значення елементів форми потрібно отримати кожен раз у момент зміни поля і зробити щось динамічно, вони мають бути контрольовані.

// import SearchBar from './components/SearchBar';

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

// export default App;

// -------------------------Елемент select-------------------------

// import LangSwitcher from './components/LangSwitcher';

// const App = () => {
//   return (
//     <>
//       <p>Selected language: </p>
//       <LangSwitcher />
//     </>
//   );
// };
// export default App;

// Потрібно використовувати вже знайомий патерн підйому стану і перемістити стан обраної мови в компонент App.

// import LangSwitcher from './components/LangSwitcher';
// import { useState } from 'react';

// const App = () => {
//   const [lang, setLang] = useState('uk');

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// export default App;

// ----------Радіо - кнопки-----------

//Радіо-кнопки є альтернативою select, оскільки в групі може бути обрано лише один варіант.

// Щоб визначити, чи обрано опцію чи ні, атрибуту checked необхідно передати true чи false. Для цього атрибуту checked передається результат порівняння стану і значення атрибута value конкретної радіо-кнопки.

// Передамо кожній радіо-кнопці в групі атрибут onChange, значенням якого буде функція, всередині якої ми записуємо обране значення в стан компонента.

// import { useState } from 'react';

// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState('sm');

//   const handleSizeChange = evt => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <h2>Cofee size {coffeeSize}</h2>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === 'sm'}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === 'md'}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === 'lg'}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//     </>
//   );
// };

// export default App;

// ---------Чекбокси----------

// Якщо радіо-кнопки призначені для вибору одного з багатьох елементів, то чекбокси дозволяють обрати багато з багатьох. Чекбокс, так само, як і радіо-кнопка, може знаходитися в двох станах: обраний або ні.

import { useState } from 'react';

const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default App;
