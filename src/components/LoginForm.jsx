// --------------------Форми----------------------------

// Для того щоб обробити відправку форми, елементу форми передається колбек-функція в пропс onSubmit
// evt.preventDefault();

// const LoginForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(evt);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// ------------Неконтрольована форма--------------

// Якщо значення полів форми потрібні лише в момент її відправки, то така форма називається неконтрольованою.

// Властивість elements зберігає об'єкт із властивостями, імена яких збігаються зі значеннями атрибутів name елементів форми.
// Щоб отримати доступ до значень полів, звертаємося до властивості value
// form.reset(); - Щоб скинути значення полів форми в початкові,

// const LoginForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     console.log(form.elements);

//     const { login, password } = form.elements;

//     // Посилання на DOM-елементи
//     console.log(login, password);

//     // Значення полів
//     console.log(login.value, password.value);

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// ------------Використання форми-----------

// На практиці форма це окремий компонент, який в більшості випадків повинен турбуватися тільки про збір значень своїх полів. Те, що з цими значеннями потрібно зробити, передається формі у вигляді пропса від батьківського компонента, де форма рендериться.

// У компоненті форми деструктуризуємо пропс onLogin, це функція, тому викликаємо її при сабміті форми і передаємо їй значення полів.

// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Викликаємо пропс onLogin
//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// ----------------------------Хук useId-----------------------------

// для цього і існує хук useId, який повертає унікальний рядок ідентифікатора, пов'язаний з конкретним викликом useId у даному компоненті.

// import { useId } from 'react';

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();

//   return (
//     <form>
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// -------------------------------Контрольована форма-----------------------------

import { useState } from 'react';

const LoginForm = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = evt => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
