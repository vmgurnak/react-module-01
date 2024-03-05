// -------------------------Елемент select-------------------------

// import { useId } from 'react';

// const LangSwitcher = () => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select id={selectId}>
//         <option value="en">English</option>
//         <option value="uk">Ukrainian</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// export default LangSwitcher;

// Якщо селект використовується поза формою, то ми працюємо з ним як з контрольованим елементом:

// Зберігаємо поточне значення в стані.
// Передаємо значення стану як атрибут value.
// Змінюємо стан при події onChange.

// import { useState, useId } from 'react';

// const LangSwitcher = () => {
//   const selectId = useId();
//   const [lang, setLang] = useState('uk');

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={lang}
//         onChange={evt => setLang(evt.target.value)}
//       >
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// export default LangSwitcher;

// Потрібно використовувати вже знайомий патерн підйому стану і перемістити стан обраної мови в компонент App.
// Залишається виконати рефакторинг компонента LangSwitcher так, щоб він використовував отримані пропси value та onSelect.

import { useId } from 'react';

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={evt => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
