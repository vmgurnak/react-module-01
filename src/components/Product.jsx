// src/Product.jsx

// Компонент

// JSX - опис UI

// export const Product = () => {
//   return (
//     <>
//       <h2>Tacos</h2>
//       <img
//         src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         alt="Tacos With Lime"
//         width="640"
//       />
//       <p>Price: 999 credits</p>
//     </>
//   );
// };

// // Будь-який компонен оголошує один параметр - props
// const Product = (props) => {
//   const price = 999;
//   const imgUrl =
//     '<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>';

//   return (
//     // Якщо зайвий обгортальний тег не потрібен в розмітці, використовуються фрагменти
//     <>
//       <h2>{props.name}</h2>
//       <h2>Tacos</h2>
//       {/* використовувати будь-який валідний вираз, заключаючи його у фігурні дужки. */}
//       <img src={imgUrl} alt="Tacos With Lime" width="640" />У межах JSX можна
//       <p>Price: {price} credits</p>
//     </>
//   );
// };

// src/components/Product.jsx

// Властивості компонента (props)

// const Product = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.imgUrl} alt={props.name} width="480" />
//       <p>Price: {props.price} credits</p>
//     </div>
//   );
// };

// // Используется дефолтный экспорт
// export default Product;

// Відразу будемо використовувати простий патерн під час роботи з props. Оскільки props – це об'єкт, ми можемо деструктуризувати його у підписі функції.

// Именнованный экспорт

// export const Product = ({ name, imgUrl, price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// };

// Значення пропсів за замовчуванням

// export const Product = ({
//   name,
//   imgUrl = '<https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder>',
//   price,
// }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// };

// src/components/Product.jsx

// Типізація пропсів

// Пакет prop-types надає низку валідаторів для перевірки коректності отриманих типів даних під час виконання коду, повідомляючи про невідповідності в консолі.

import PropTypes from 'prop-types';

const Product = ({
  name,
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  price,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="480" />
    <h2>{name}</h2>    <p>Price: {price} credits</p> {' '}
  </div>
);

// Опис типів пропсів компонента
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;
