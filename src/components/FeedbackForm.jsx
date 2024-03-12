// -------------------Бібліотека Formik. Контейнер форми------------------

// import { Formik, Form } from 'formik';

// const FeedbackForm = () => {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       <Form>
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// -------------------Бібліотека Formik. Поля форми------------------

// import { Formik, Form, Field } from 'formik';

// const FeedbackForm = () => {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// -------------------Бібліотека Formik. Початкове значення полів------------------

// import { Formik, Form, Field } from 'formik';

// const initialValues = {
//   username: '',
//   email: '',
// };

// const FeedbackForm = () => {
//   return (
//     <Formik initialValues={initialValues} onSubmit={() => {}}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// -------------------Бібліотека Formik. Відправка форми------------------

// import { Formik, Form, Field } from 'formik';

// const initialValues = {
//   username: '',
//   email: '',
// };

// const FeedbackForm = () => {
//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// ----------------Бібліотека Formik. Елементи форми--------------

// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';

// const initialValues = {
//   username: '',
//   email: '',
// };

// const FeedbackForm = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label htmlFor={nameFieldId}>Username</label>
//         <Field type="text" name="username" id={nameFieldId} />

//         <label htmlFor={emailFieldId}>Email</label>
//         <Field type="email" name="email" id={emailFieldId} />

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// ---------------Бібліотека Formik. Типи полів---------------

// За замовчуванням компонент Field рендерить тег input. Щоб змінити тип поля, необхідно передати компоненту Field пропс as значенням якого є рядок - тип тега.

// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';

// const initialValues = {
//   username: '',
//   email: '',
//   message: '',
// };

// const FeedbackForm = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label htmlFor={nameFieldId}>Username</label>
//         <Field type="text" name="username" id={nameFieldId} />

//         <label htmlFor={emailFieldId}>Email</label>
//         <Field type="email" name="email" id={emailFieldId} />

//         <label htmlFor={msgFieldId}>Message</label>
//         <Field as="textarea" name="message" id={msgFieldId} rows="5" />

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// --------------------------Бібліотека Formik. Селект---------------------------------

// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';

// const initialValues = {
//   username: '',
//   email: '',
//   message: '',
//   level: 'good',
// };

// const FeedbackForm = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();
//   const levelFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label htmlFor={nameFieldId}>Username</label>
//         <Field type="text" name="username" id={nameFieldId} />

//         <label htmlFor={emailFieldId}>Email</label>
//         <Field type="email" name="email" id={emailFieldId} />

//         <label htmlFor={msgFieldId}>Message</label>
//         <Field as="textarea" name="message" id={msgFieldId} rows="5" />

//         <label htmlFor={levelFieldId}>Service satisfaction level</label>
//         <Field as="select" name="level" id={levelFieldId}>
//           <option value="good">Good</option>
//           <option value="neutral">Neutral</option>
//           <option value="bad">Bad</option>
//         </Field>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// --------------------------Бібліотека Formik. Валідація---------------------------------

// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// // Схема валидации
// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Must be a valid email!').required('Required'),
//   message: Yup.string()
//     .min(3, 'Too short')
//     .max(256, 'Too long')
//     .required('Required'),
//   level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
// });

// // Начальные значения полей
// const initialValues = {
//   username: '',
//   email: '',
//   message: '',
//   level: 'good',
// };

// const FeedbackForm = () => {
//   // id для полей
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();
//   const levelFieldId = useId();

//   // коллбэк функция при отправке формы
//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form>
//         <label htmlFor={nameFieldId}>Username</label>
//         <Field type="text" name="username" id={nameFieldId} />

//         <label htmlFor={emailFieldId}>Email</label>
//         <Field type="email" name="email" id={emailFieldId} />

//         <label htmlFor={msgFieldId}>Message</label>
//         <Field as="textarea" name="message" id={msgFieldId} rows="5" />

//         <label htmlFor={levelFieldId}>Service satisfaction level</label>
//         <Field as="select" name="level" id={levelFieldId}>
//           <option value="good">Good</option>
//           <option value="neutral">Neutral</option>
//           <option value="bad">Bad</option>
//         </Field>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

// --------------------------Бібліотека Formik. Помилки валідації---------------------------------

import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  message: Yup.string()
    .min(3, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span" />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field as="textarea" name="message" id={msgFieldId} rows="5" />
          <ErrorMessage name="message" component="span" />
        </div>

        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" as="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
