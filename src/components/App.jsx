// import { useState } from 'react';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/public/vite.svg';
// import './App.css';
import '../index.css';

// Дефолтный импорт
// import Product from './Product';
// import Mailbox from './Mailbox';
// Именнованный импорт
// import { Product } from './Product';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       {/* закривайте тег компонента зі зворотним слешем (/) */}
//       <Product />
//       <Product />
//       <Product />

//       {/* <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" /> */}
//     </div>
//   );
// }

// Властивості компонента (props)

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />

//       <Mailbox username="Jon" messages={[1, 2, 3]} />
//     </div>
//   );
// }

// Умовний рендеринг

// export default function App() {
//   return (
//     <div>
//       <Mailbox username="Jon" messages={[1, 2, 3]} />
//     </div>
//   );
// }

// Колекції

// import BookList from './BookList';

// const favouriteBooks = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Router overview' },
// ];

// const App = () => {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// };

// Властивість props.children

// Все, що знаходиться між відкриваючим і закриваючим тегом компонента, доступно в службовому пропсі props.children, який є у всіх компонентів.

// import Card from './Card';

// // Використання
// const App = () => {
//   return (
//     <>
//       <Card>
//         <h1>Card title</h1>
//         <p>Text between opening and closing tag</p>
//       </Card>
//       ;
//     </>
//   );
// };

// export default App;

// Типізація пропсів

// import Product from './Product';

// function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// export default App;

// Вбудовані стилі

// import Alert from './Alert';

// const App = () => {
//   return (
//     <>
//       <Alert>Please update your email!</Alert>
//       <Alert>There was an error during transaction!</Alert>
//       <Alert>Payment received, thank you for your purchase!</Alert>
//     </>
//   );
// };

// export default App;

// Динамічні стилі

// import Alert from './Alert';

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// export default App;

// Ванільний CSS

// import Alert from './Alert';

// const App = () => {
//   return (
//     <>
//       <Alert>Please update your email!</Alert>
//       <Alert>There was an error during transaction!</Alert>
//       <Alert>Payment received, thank you for your purchase!</Alert>
//     </>
//   );
// };

// export default App;

// Композиція класів
// Бібліотека clsx

import Alert from './Alert';
import UserMenu from './UserMenu';

const App = () => {
  return (
    <>
      <Alert variant="info" outlined="true">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" elevated="true">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      {/* Бібліотека React Icons */}
      <UserMenu name="Alex" />
      <button onClick={() => alert("I'm a button!")}>Click me!</button>
    </>
  );
};

export default App;

// Бібліотека clsx

// import clsx from 'clsx';

// const className = clsx(
//   'first',
//   10,
//   undefined && 'second',
//   true && 'third',
//   false ? 'fourth' : 'fifth'
// );
// console.log(className); // "first 10 third fifth"
